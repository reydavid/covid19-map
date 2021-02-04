import LegendItem from './LegendItem';

const legendItems = [
    new LegendItem(
        "1,000,000 +",
        "red",//"#741f1f",
        (cases) => cases >= 1_000_000,
        "white"
    ),
    new LegendItem(
        "500,000 - 999,999",
        "orange",//"#9c2929",
        (cases) => cases >= 500_000 && cases < 1_000_000,
        "white"
    ),       
    new LegendItem(
        "200,000 - 499,999",
        "yellow",//"#c57f7f",
        (cases) => cases >= 200_000 && cases < 499_999,
    ),       
    new LegendItem(
        "50,000 - 199,999",
        "#d8aaaa",
        (cases) => cases >= 50_000 && cases < 199_999,
    ),       
    new LegendItem(
        "0 - 49,999",
        "chartreuse",//"#ebd4d4",
        (cases) => cases >= 0 && cases < 49_999,
    ),       
    new LegendItem("No Data", "#ffffff",(cases) => true),       
];

export default legendItems;
