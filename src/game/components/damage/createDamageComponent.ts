export function createDamageComponent({
    amount = 1,
    removeOnContact = true,
    visible = true,
}) {

    return {
        type: 'damage',
        visible,

        amount,
        removeOnContact,
    }
}