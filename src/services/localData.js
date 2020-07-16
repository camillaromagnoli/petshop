const petshop = [
    {
        name: 'Meu canino feliz',
        distance: 2,
        week: {
            small: 20,
            big: 40,
        },
        weekend: {
            small: 24,
            big: 48,
        }
    },
    {
        name: 'Vai Rex',
        distance: 1.7,
        week: {
            small: 15,
            big: 50,
        },
        weekend: {
            small: 20,
            big: 55,
        }
    },
    {
        name: 'ChowChawgas',
        distance: 0.8,
        week: {
            small: 30,
            big: 45,
        },
        weekend: {
            small: 30,
            big: 45,
        }
    }
];

export const lowestPrice = (data, small, big) => {
    const typeDate = new Date(data);
    const result = { name: '', distance: null, totalPrice: null }
    if (typeDate.getDay() + 1 > 5) {
        petshop.forEach(element => {
            const totalPrice = (small * element.weekend.small) + (big * element.weekend.big)
            if (result.totalPrice === null || result.totalPrice > totalPrice || (totalPrice === result.totalPrice && element.distance < result.distance)) {
                result.name = element.name
                result.distance = element.distance
                result.totalPrice = totalPrice
            }
        })
    } else {
        petshop.forEach(element => {
            const totalPrice = (small * element.week.small) + (big * element.week.big)
            if (result.totalPrice === null || result.totalPrice > totalPrice || (totalPrice === result.totalPrice && element.distance < result.distance)) {
                result.name = element.name
                result.distance = element.distance
                result.totalPrice = totalPrice
            }
        })
    }
    return result
}