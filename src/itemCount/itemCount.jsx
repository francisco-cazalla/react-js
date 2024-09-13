import React, { useState } from 'react';
import { Button, Box, Text } from '@chakra-ui/react';

const ItemCount = ({ initial, stock, onAdd }) => {
    const [count, setCount] = useState(initial);

    const increment = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };

    const decrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    return (
        <Box display="flex" alignItems="center" justifyContent="center" gap="4" mt="4">
            {/* Botón de decremento */}
            <Button onClick={decrement} size="lg" colorScheme="teal" variant="outline">
                -
            </Button>
            
            {/* Contador */}
            <Text fontSize="2xl" fontWeight="bold" mx="4" width="50px" textAlign="center">
                {count}
            </Text>
            
            {/* Botón de incremento */}
            <Button onClick={increment} size="lg" colorScheme="teal" variant="outline">
                +
            </Button>

            {/* Botón de agregar al carrito */}
            <Button onClick={() => onAdd(count)} size="lg" colorScheme="blue" ml="6">
                Agregar al carrito
            </Button>
        </Box>
    );
}

export default ItemCount;