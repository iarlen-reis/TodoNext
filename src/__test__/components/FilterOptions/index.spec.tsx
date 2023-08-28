import { render } from '@testing-library/react'
import { FilterOptions } from '@/components/FilterOptions'
import '@testing-library/jest-dom'
import { FilterContext } from '@/contexts/filterContext'

const renderFilterOptions = () => {
  return render(
    <FilterContext.Provider
      value={{
        filter: '',
        optionsFilter: true,
        handleFilter: jest.fn(),
        handleOptionsFilter: jest.fn(),
      }}
    >
      <FilterOptions />
    </FilterContext.Provider>,
  )
}

describe('FilterOptions component', () => {
  it('should render FilterOptions component', () => {
    renderFilterOptions()
  })

  it('should have a button with title <adicionar filtro de pendentes> and text <Pendentes>', () => {
    const { getByTitle } = renderFilterOptions()

    const buttonPendentes = getByTitle('adicionar filtro de pendentes')

    expect(buttonPendentes).toBeInTheDocument()
  })

  it('should have a button with title <adicionar filtro de concluídas> and text <Concluídas>', () => {
    const { getByTitle } = renderFilterOptions()

    const buttonFinished = getByTitle('adicionar filtro de concluídas')

    expect(buttonFinished).toBeInTheDocument()
  })

  it('should have a button with title <remover filtro>', () => {
    const { getByTitle } = renderFilterOptions()

    const buttonRemoveFilter = getByTitle('remover filtro')

    expect(buttonRemoveFilter).toBeInTheDocument()
  })
})
