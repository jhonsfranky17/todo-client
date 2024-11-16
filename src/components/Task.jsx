import { Flex, Box, Text, Button } from "@radix-ui/themes";
import PropTypes from "prop-types";

const Task = ({ task, handleEdit, handleDelete }) => {
  return (
    <Box>
      <Flex gap="3" justify={"center"} align={"center"}>
        <Text weight={"medium"}>{task}</Text>
        <Button onClick={handleEdit} color="orange">
          Edit
        </Button>
        <Button onClick={handleDelete} color="red">
          Delete
        </Button>
      </Flex>
    </Box>
  );
};

Task.propTypes = {
  task: PropTypes.string.isRequired,
};

export default Task;
