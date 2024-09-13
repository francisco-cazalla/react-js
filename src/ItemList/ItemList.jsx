
import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Flex,
    Stack,
    Img,
  } from '@chakra-ui/react'
  
  
  
import { BsArrowUpRight } from "react-icons/bs";
  const ItemList = ({ products }) => {
    //Se coloca un Flex para que se acomoden los cards uno al lado de otro y el atributo wrap obliga a mis cards a amoldarse al contenedor (no hace overflow en x)
    return (
    <Flex wrap={"wrap"}>
        {products.map((item) => {
        return (
            <Center py={12} key={item.id}>
    <Box
        role={'group'}
        p={6}
        maxW={'330px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}>
        <Box
        rounded={'lg'}
        mt={-12}
        pos={'relative'}
        height={'230px'}
        _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            backgroundImage: `url(${item.imgage})`,
            filter: 'blur(15px)',
            zIndex: -1,
        }}
        _groupHover={{
            _after: {
            filter: 'blur(20px)',
            },
        }}>
        <Img
            rounded={'lg'}
            height={230}
            width={282}
            objectFit={'cover'}
            src={item.Image}
            alt="#"
        />
        </Box>
        <Stack pt={10} align={'center'}>
        <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
            Brand
        </Text>
        
        <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
            {item.name}
        </Heading>
        <Stack direction={'row'} align={'center'}>
            <Text fontWeight={800} fontSize={'xl'}>
            {item.price}
            </Text>
            <Text textDecoration={'line-through'} color={'gray.600'}>
            {item.stock}
            </Text>
        </Stack>
        </Stack>
    </Box>
    </Center>

        );
        })}
    </Flex>
    );
};

export default ItemList