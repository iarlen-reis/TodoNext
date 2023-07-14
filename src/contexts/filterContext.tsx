import { ReactNode, createContext, useContext, useState } from 'react'

interface IFilterContextProps {
  filter: string
  handleFilter: (value: string) => void
}

export const FilterContext = createContext<IFilterContextProps>({
  filter: '',
  handleFilter: (value: string) => {},
})

interface IChildren {
  children: ReactNode
}

export const FilterProvider = ({ children }: IChildren) => {
  const [filter, setFilter] = useState<string>('')

  const handleFilter = (value: string) => {
    setFilter(value)
  }

  return (
    <FilterContext.Provider value={{ filter, handleFilter }}>
      {children}
    </FilterContext.Provider>
  )
}

export const useFilterContext = () => {
  return useContext(FilterContext)
}
