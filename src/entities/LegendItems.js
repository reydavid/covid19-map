import LegendItem from './LegendItem';

const legendItems = [
    new LegendItem(
        "1,000,001 +",
        "red",//"#741f1f",
        (cases) => cases >= 1_000_001,
        "white"
    ),
    new LegendItem(
        "500,001 - 1,000,000",
        "orange",//"#9c2929",
        (cases) => cases >= 500_001 && cases < 1_000_000,
        "white"
    ),       
    new LegendItem(
        "200,001 - 500,000",
        "yellow",//"#c57f7f",
        (cases) => cases >= 200_001 && cases < 500_000,
    ),       
    new LegendItem(
        "50,001 - 200,000",
        "aqua",//"#d8aaaa",
        (cases) => cases >= 50_001 && cases < 200_000,
    ),       
    new LegendItem(
        "1 - 50,000",
        "chartreuse",//"#ebd4d4",
        (cases) => cases >= 1 && cases < 50_000,
    ),       
    new LegendItem("No Data", "#ffffff",(cases) => true),       
];

export default legendItems;
