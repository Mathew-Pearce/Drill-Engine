const counters = 
{};

export function createEntityId(
    type
) {
    counters[type] ??=
    0;

    const id =
        `${type}_${counters[type]}`;

    counters[type]++

    return id;
}