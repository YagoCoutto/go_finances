import React from "react";
import {
    Container,
    Header,
    Title,
    Category,
    Icon,
    Name,
    Separator,
    Footer
} from "./styles";
import { FlatList } from "react-native";
import { categories } from "../../categories/categories";
import { Button } from "../../components/Form/Button";
import { GestureHandlerRootView } from "react-native-gesture-handler";

interface Category {
    key: string;
    name: string;
}

interface Props {
    category: Category;
    setCategory: (category: Category) => void;
    closeSelectCategory: () => void;
}

export function CategorySelect(
    { category,
        setCategory,
        closeSelectCategory }: Props
) {
    function handleCategorySelect(category: Category) {
        setCategory(category)
    }
    return (

        <Container>
            <Header>
                <Title>Categoria</Title>
            </Header>
            <FlatList
                data={categories}
                keyExtractor={(item) => item.key}
                renderItem={({ item }) => (
                    <GestureHandlerRootView>
                        <Category
                            onPress={() => handleCategorySelect(item)}
                            isActive={category.key === item.key}
                        >
                            <Icon name={item.icon} />
                            <Name>{item.name}</Name>
                        </Category>
                    </GestureHandlerRootView>
                )}
                ItemSeparatorComponent={() => <Separator />}
            />
            <Footer>
                <Button
                    title="Selecionar"
                    onPress={closeSelectCategory}
                />
            </Footer>
        </Container>
    );
}