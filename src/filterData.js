export const filterData = [
    {
        items: [
            { name: 'Daily', value: 'daily' },
            { name: 'Weekly', value: 'weekly' },
            { name: 'Monthly', value: 'monthly' },
            { name: 'Yearly', value: 'yearly' },
        ],
        placeholder: 'Rent Frequency',
        queryName: 'rentFrequency',
    },
    {
        items: [
            { name: '40-50', value: '40-50' },
            { name: '50-60', value: '50-60' },
            { name: '60-70', value: '60-70' },
            { name: '70-80', value: '70-80' },
            { name: '80-90', value: '80-90' },
            { name: '90-100', value: '90-100' },
            { name: '100-110', value: '100-110' },
        ],
        placeholder: 'Max Area(sqft)',
        queryName: 'areaMax',
    },
    {
        items: [
            { name: '1', value: '1' },
            { name: '2', value: '2' },
            { name: '3', value: '3' },
            { name: '4', value: '4' },
            { name: '5', value: '5' },
            { name: '6', value: '6' },
            { name: '7', value: '7' },
            { name: '8', value: '8' },
            { name: '9', value: '9' },
            { name: '10', value: '10' },
        ],
        placeholder: 'Rooms',
        queryName: 'roomsMin',
    },
    {
        items: [
            { name: 'Apartment', value: '4' },
            { name: 'Townhouses', value: '16' },
            { name: 'Villas', value: '3' },
            { name: 'Penthouses', value: '18' },
            { name: 'Hotel Apartments', value: '21' },
            { name: 'Villa Compound', value: '19' },
            { name: 'Residential Plot', value: '14' },
            { name: 'Residential Floor', value: '12' },
            { name: 'Residential Building', value: '17' },
        ],
        placeholder: 'Property Type',
        queryName: 'categoryExternalID',
    },
];

export const getFilterValues = (filterValues) => {
    const {
        rentFrequency,
        categoryExternalID,
        areaMax,
        roomsMin
    } = filterValues;

    const values = [
        {
            name: 'rentFrequency',
            value: rentFrequency,
        },
        {
            name: 'areaMax',
            value: areaMax,
        },
        {
            name: 'roomsMin',
            value: roomsMin,
        },
        {
            name: 'categoryExternalID',
            value: categoryExternalID,
        }
    ];

    return values;
};