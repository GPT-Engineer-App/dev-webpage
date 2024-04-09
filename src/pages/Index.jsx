import React from "react";
import { Box, Heading, Text, Stack, Flex, Button, Image, Link, Icon } from "@chakra-ui/react";
import { FaCode, FaLaptopCode, FaServer, FaMobile } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box bg="gray.100" py={20}>
        <Box maxW="6xl" mx="auto" px={4}>
          <Flex alignItems="center" justifyContent="space-between">
            <Box>
              <Heading as="h1" size="2xl" mb={4}>
                Custom Software Solutions for Your Business
              </Heading>
              <Text fontSize="xl" mb={6}>
                Boost productivity, streamline operations, and drive growth with tailor-made software applications.
              </Text>
              <Stack direction={["column", "row"]} spacing={4}>
                <Button colorScheme="blue" size="lg">
                  Get Started
                </Button>
                <Button colorScheme="gray" size="lg">
                  Learn More
                </Button>
              </Stack>
            </Box>
            <Image src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80" alt="Custom Software Development" maxW="500px" />
          </Flex>
        </Box>
      </Box>

      {/* Services Section */}
      <Box py={20}>
        <Box maxW="6xl" mx="auto" px={4}>
          <Heading as="h2" size="xl" mb={10} textAlign="center">
            Our Services
          </Heading>
          <Flex justifyContent="space-between">
            <Box textAlign="center">
              <Icon as={FaCode} boxSize={12} color="blue.500" mb={4} />
              <Heading as="h3" size="lg" mb={2}>
                Web Development
              </Heading>
              <Text>We build modern and responsive websites using the latest web technologies.</Text>
            </Box>
            <Box textAlign="center">
              <Icon as={FaLaptopCode} boxSize={12} color="blue.500" mb={4} />
              <Heading as="h3" size="lg" mb={2}>
                Desktop Applications
              </Heading>
              <Text>We develop powerful desktop applications for Windows, macOS, and Linux.</Text>
            </Box>
            <Box textAlign="center">
              <Icon as={FaServer} boxSize={12} color="blue.500" mb={4} />
              <Heading as="h3" size="lg" mb={2}>
                Backend Development
              </Heading>
              <Text>We build scalable and secure backend systems using modern frameworks and databases.</Text>
            </Box>
            <Box textAlign="center">
              <Icon as={FaMobile} boxSize={12} color="blue.500" mb={4} />
              <Heading as="h3" size="lg" mb={2}>
                Mobile App Development
              </Heading>
              <Text>We create native and cross-platform mobile apps for iOS and Android.</Text>
            </Box>
          </Flex>
        </Box>
      </Box>

      {/* CTA Section */}
      <Box bg="blue.500" py={20} color="white">
        <Box maxW="6xl" mx="auto" px={4} textAlign="center">
          <Heading as="h2" size="xl" mb={4}>
            Ready to Start Your Project?
          </Heading>
          <Text fontSize="xl" mb={8}>
            Contact us today to discuss your software development needs.
          </Text>
          <Button colorScheme="white" variant="outline" size="lg">
            Get in Touch
          </Button>
        </Box>
      </Box>

      {/* Footer */}
      <Box bg="gray.100" py={10}>
        <Box maxW="6xl" mx="auto" px={4}>
          <Stack direction={["column", "row"]} spacing={8}>
            <Box>
              <Heading as="h4" size="md" mb={4}>
                Company
              </Heading>
              <Link display="block" mb={2}>
                About Us
              </Link>
              <Link display="block" mb={2}>
                Careers
              </Link>
              <Link display="block" mb={2}>
                Contact Us
              </Link>
            </Box>
            <Box>
              <Heading as="h4" size="md" mb={4}>
                Services
              </Heading>
              <Link display="block" mb={2}>
                Web Development
              </Link>
              <Link display="block" mb={2}>
                Desktop Applications
              </Link>
              <Link display="block" mb={2}>
                Backend Development
              </Link>
              <Link display="block" mb={2}>
                Mobile App Development
              </Link>
            </Box>
            <Box>
              <Heading as="h4" size="md" mb={4}>
                Connect
              </Heading>
              <Link display="block" mb={2}>
                Facebook
              </Link>
              <Link display="block" mb={2}>
                Twitter
              </Link>
              <Link display="block" mb={2}>
                LinkedIn
              </Link>
              <Link display="block" mb={2}>
                GitHub
              </Link>
            </Box>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default Index;
