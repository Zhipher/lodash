import { foo, bar, result } from '../functions/assign'

it('should have property added', () => {
    expect(result).toMatchObject(foo)
    expect(result).toMatchObject(bar)
})