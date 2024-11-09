import { Box, Text, Button, Stack, Divider, Tag } from "@chakra-ui/react";
import TimeAnalysis from "./TimeAnalysis";

const LeetCodeQuestion = () => {
  return (
    <Box className="w-[100%] h-[100%] p-4 border-2 rounded-lg shadow-md">
        <Box>
        <Text className="mb-7 text-3xl font-semibold text-white">
            1. Two Sum
          </Text>
        </Box>
      {/* Title and metadata */}
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={4}>
        <Box>
          <Tag colorScheme="green" variant="solid" mt={2}>
            Solved
          </Tag>
          <Text fontSize="lg" color="gray.600">
            Easy
          </Text>
        </Box>
        <Button>
          <TimeAnalysis/>
        </Button>
        <Button variant="outline" colorScheme="blue" size="sm">
          Hint
        </Button>
      </Stack>

      {/* Problem Description */}
      <Text fontSize="md" mb={4}>
        Given an array of integers <strong>nums</strong> and an integer <strong>target</strong>, return indices of the two numbers such that they add up to <strong>target</strong>.
        <br />
        You may assume that each input would have exactly one solution, and you may not use the same element twice.
        <br />
        You can return the answer in any order.
      </Text>

      <Divider my={4} />

      {/* Example Section */}
      <Text fontSize="lg" fontWeight="bold" mb={2}>
        Example 1:
      </Text>
      <Box bg="gray.50" className="text-black" p={3} borderRadius="md" mb={4}>
        <Text>
          <strong>Input:</strong> nums = [2,7,11,15], target = 9
        </Text>
        <Text>
          <strong>Output:</strong> [0, 1]
        </Text>
        <Text>
          <strong>Explanation:</strong> Because nums[0] + nums[1] == 9, we return [0, 1].
        </Text>
      </Box>

      <Text fontSize="lg" fontWeight="bold" mb={2}>
        Example 2:
      </Text>
      <Box bg="gray.50" className="text-black" p={3} borderRadius="md" mb={4}>
        <Text>
          <strong>Input:</strong> nums = [3,2,4], target = 6
        </Text>
        <Text>
          <strong>Output:</strong> [1, 2]
        </Text>
      </Box>

      <Text fontSize="lg" fontWeight="bold" mb={2}>
        Example 3:
      </Text>
      <Box bg="gray.50" className="text-black" p={3} borderRadius="md" mb={4}>
        <Text>
          <strong>Input:</strong> nums = [3,3], target = 6
        </Text>
        <Text>
          <strong>Output:</strong> [0, 1]
        </Text>
      </Box>

      {/* Constraints */}
      <Text fontSize="lg" fontWeight="bold" mb={2}>
        Constraints:
      </Text>
      <Box bg="gray.50" className="text-black" p={3} borderRadius="md" mb={4}>
        <Text>2 &lt;= nums.length &lt;= 10<sup>4</sup></Text>
        <Text>-10<sup>9</sup> &lt;= nums[i] &lt;= 10<sup>9</sup></Text>
        <Text>-10<sup>9</sup> &lt;= target &lt;= 10<sup>9</sup></Text>
        <Text>Only one valid answer exists.</Text>
      </Box>

      <Divider my={4} />

      {/* Footer Section */}
      <Stack direction="row" justifyContent="space-between" mt={4}>
        <Text fontSize="sm" color="gray.600">
          Acceptance Rate: 53.9%
        </Text>
        <Button variant="solid" colorScheme="teal" size="sm">
          Discuss (1K)
        </Button>
      </Stack>
    </Box>
  );
};

export default LeetCodeQuestion;
