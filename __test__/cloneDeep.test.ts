import { object1, object2 } from "../types/cloneDeep";

it('should be cloned', () => {
    console.log('object1', object1)
    console.log('object2', object2)
    expect(object1).toStrictEqual(object2)
})