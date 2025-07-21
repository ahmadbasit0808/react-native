import { Text, View, SectionList, StyleSheet } from "react-native";
const menuItemsToDisplay = [
  {
    title: "Appetizers",
    data: [
      { name: "Hummus", price: "$5.00" },
      { name: "Moutabal", price: "$5.00" },
      { name: "Falafel", price: "$7.50" },
      { name: "Marinated Olives", price: "$5.00" },
      { name: "Kofta", price: "$5.00" },
      { name: "Eggplant Salad", price: "$8.50" },
    ],
  },
  {
    title: "Main Dishes",
    data: [
      { name: "Lentil Burger", price: "$10.00" },
      { name: "Smoked Salmon", price: "$14.00" },
      { name: "Kofta Burger", price: "$11.00" },
      { name: "Turkish Kebab", price: "$15.50" },
    ],
  },
  {
    title: "Sides",
    data: [
      { name: "Fries", price: "$3.00", id: "11K" },
      { name: "Buttered Rice", price: "$3.00" },
      { name: "Bread Sticks", price: "$3.00" },
      { name: "Pita Pocket", price: "$3.00" },
      { name: "Lentil Soup", price: "$3.75" },
      { name: "Greek Salad", price: "$6.00" },
      { name: "Rice Pilaf", price: "$4.00" },
    ],
  },
  {
    title: "Desserts",
    data: [
      { name: "Baklava", price: "$3.00" },
      { name: "Tartufo", price: "$3.00" },
      { name: "Tiramisu", price: "$5.00" },
      { name: "Panna Cotta", price: "$5.00" },
    ],
  },
];

const Item = ({ name, price }) => {
  return (
    <View style={menuItems.itemBox}>
      <Text style={menuItems.itemText}>{name}</Text>
      <Text style={menuItems.itemText}>{price}</Text>
    </View>
  );
};
const Header = () => {
  return <Text style={menuItems.title}>View Menu</Text>;
};
const Footer = () => {
  return <Text style={menuItems.title}>No more products</Text>;
};

const Separator = () => {
  return <View style={menuItems.separator} />;
};
const sectionHeader = ({ section: { title } }) => {
  return (
    <View style={menuItems.sectionBox}>
      <Text style={menuItems.sectionTitle}>{title}</Text>
    </View>
  );
};

export default function MenuItems() {
  const renderItem = ({ item }) => {
    return <Item name={item.name} price={item.price} />;
  };
  return (
    <View style={menuItems.container}>
      <SectionList
        renderSectionHeader={sectionHeader}
        indicatorStyle="white"
        ItemSeparatorComponent={Separator}
        ListHeaderComponent={Header}
        ListFooterComponent={Footer}
        style={menuItems.list}
        sections={menuItemsToDisplay}
        renderItem={renderItem}
        keyExtractor={(item, index) => `${item.name}-${index}`}
      />
    </View>
  );
}

const menuItems = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333333",
  },
  title: {
    textAlign: "center",
    backgroundColor: "#219ebc",
    fontSize: 24,
    fontWeight: "600",
    padding: 10,
  },
  itemBox: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  itemText: {
    minWidth: 50,
    color: "#8d7716ff",
    fontSize: 20,
  },
  sectionBox: {
    padding: 5,
    backgroundColor: "#e3aa39",
  },
  sectionTitle: {
    fontSize: 24,
    color: "black",
    textAlign: "center",
    fontWeight: "500",
  },
});
