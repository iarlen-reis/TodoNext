import { ReactNode, createContext, useContext, useState } from 'react'

interface IFilterContextProps {
  filter: string
  optionsFilter: boolean
  handleFilter: (value: string) => void
  handleOptionsFilter: () => void
}

export const FilterContext = createContext<IFilterContextProps>({
  filter: '',
  optionsFilter: false,
  handleFilter: (value: string) => {},
  handleOptionsFilter: () => {},
})

interface IChildren {
  children: ReactNode
}

export const FilterProvider = ({ children }: IChildren) => {
  const [filter, setFilter] = useState<string>('')
  const [optionsFilter, setOptionsFilter] = useState<boolean>(false)

  const handleFilter = (value: string) => {
    setFilter(value)
  }

  const handleOptionsFilter = () => {
    setOptionsFilter(!optionsFilter)
  }

  return (
    <FilterContext.Provider
      value={{ filter, optionsFilter, handleFilter, handleOptionsFilter }}
    >
      {children}
    </FilterContext.Provider>
  )
}

export const useFilterContext = () => {
  return useContext(FilterContext)
}
