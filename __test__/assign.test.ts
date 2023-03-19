import { foo, bar, result } from '../types/assign'

it('should have property added', () => {
    expect(result).toMatchObject(foo)
    expect(result).toMatchObject(bar)
})