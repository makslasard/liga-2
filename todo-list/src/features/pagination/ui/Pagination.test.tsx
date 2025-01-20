import { Pagination } from '@/features/pagination/ui/Pagination'
import { renderWithProviders } from '@/app/providers/testUtils/renderWithProviders'

describe('Pagination', () => {
  test('Render component Pagination ', () => {
    const renderPagination = renderWithProviders(<Pagination />)
    expect(renderPagination).not.toBeNull()
  })
})
