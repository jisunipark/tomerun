"use client";

import { Box, Flex, Text } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Navigation = () => {
  const pathname = usePathname();

  const navItems = [
    { label: "ホーム", path: "/" },
    { label: "登録", path: "/parking/register" },
    { label: "予約", path: "/reservations" },
    { label: "マイページ", path: "/profile" },
  ];

  return (
    <Box
      position="fixed"
      bottom={0}
      left={0}
      right={0}
      bg="white"
      boxShadow="0 -2px 10px rgba(0,0,0,0.1)"
    >
      <Flex justify="space-around" py={2}>
        {navItems.map((item) => (
          <Link key={item.path} href={item.path}>
            <Flex
              direction="column"
              align="center"
              color={pathname === item.path ? "blue.500" : "gray.500"}
            >
              <Text fontSize="xs" mt={1}>
                {item.label}
              </Text>
            </Flex>
          </Link>
        ))}
      </Flex>
    </Box>
  );
};

export default Navigation;
