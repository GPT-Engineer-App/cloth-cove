import { Box, Container, Heading, SimpleGrid, Image, Text, Button, VStack, HStack, Tag } from "@chakra-ui/react";
import { FaShoppingCart, FaHeart, FaStar } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Classic Tee",
    price: "29.99",
    image: "https://images.unsplash.com/photo-1629956356549-63b8a150c8ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjbGFzc2ljJTIwdGVlfGVufDB8fHx8MTcwODczMzI3Mnww&ixlib=rb-4.0.3&q=80&w=1080",
    rating: 4.5,
  },
  {
    id: 2,
    name: "Summer Shorts",
    price: "19.99",
    image: "https://images.unsplash.com/photo-1600265360004-c16515250359?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzdW1tZXIlMjBzaG9ydHN8ZW58MHx8fHwxNzA4NzMzMjcyfDA&ixlib=rb-4.0.3&q=80&w=1080",
    rating: 4.0,
  },
  {
    id: 3,
    name: "Elegant Skirt",
    price: "39.99",
    image: "https://images.unsplash.com/photo-1493655430214-3dd7718460bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwc2tpcnR8ZW58MHx8fHwxNzA4NzMzMjcyfDA&ixlib=rb-4.0.3&q=80&w=1080",
    rating: 5.0,
  },
  // Add more products as needed
];

const ProductCard = ({ product }) => {
  return (
    <VStack borderWidth="1px" borderRadius="lg" overflow="hidden" spacing={4} align="stretch">
      <Image src={product.image} alt={product.name} boxSize="300px" objectFit="cover" />
      <Box p={5}>
        <Heading size="md">{product.name}</Heading>
        <Text fontWeight="bold" color="teal.500">
          ${product.price}
        </Text>
        <HStack>
          <FaStar color={product.rating >= 1 ? "gold" : "gray"} />
          <FaStar color={product.rating >= 2 ? "gold" : "gray"} />
          <FaStar color={product.rating >= 3 ? "gold" : "gray"} />
          <FaStar color={product.rating >= 4 ? "gold" : "gray"} />
          <FaStar color={product.rating >= 5 ? "gold" : "gray"} />
        </HStack>
        <HStack justify="space-between" mt={3}>
          <Button leftIcon={<FaShoppingCart />} colorScheme="teal" variant="outline">
            Add to Cart
          </Button>
          <Button colorScheme="pink" variant="ghost">
            <FaHeart />
          </Button>
        </HStack>
      </Box>
    </VStack>
  );
};

const Index = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <Heading mb={10} textAlign="center">
        Welcome to the Clothing Store!
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Index;
