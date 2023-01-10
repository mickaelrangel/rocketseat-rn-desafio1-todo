import { Trash } from "phosphor-react-native";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { TaskProps } from "../../screens/Home";
import { styles } from "./styles";

type TaskDetailProps = {
  task: TaskProps;
  onDeleteTask: (taskId: string) => void;
  completeTask: (taskId: string, isCompleted: boolean) => void;
};

export function TaskDetail({
  task,
  onDeleteTask,
  completeTask,
}: TaskDetailProps) {
  const [taskChecked, setTaskChecked] = useState(false);
  const styleTextDescription = taskChecked
    ? styles.taskDescriptionCompleted
    : styles.taskDescription;

  function handleDeleteTask() {
    onDeleteTask(task.id);
  }

  function handleCheckTask() {
    setTaskChecked(!taskChecked);
    completeTask(task.id, !taskChecked);
  }

  return (
    <View style={styles.container}>
      <View style={styles.boxTask}>
        <BouncyCheckbox
          size={25}
          fillColor="#5E60CE"
          onPress={handleCheckTask}
        />
        <View style={styles.task}>
          <Text style={styleTextDescription}>{task.name}</Text>
        </View>

        <TouchableOpacity onPress={handleDeleteTask}>
          <Trash color="#808080" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
