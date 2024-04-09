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
                Software Development Solutions
              </Heading>
              <Text fontSize="xl" mb={8}>
                We build custom software solutions to help businesses grow and succeed in the digital age.
              </Text>
              <Button colorScheme="blue" size="lg">
                Get Started
              </Button>
            </Box>
            <Image src="https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50fGVufDB8fHx8MTcxMjY1MDU2Nnww&ixlib=rb-4.0.3&q=80&w=1080" alt="Software Development" maxW="400px" />
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
