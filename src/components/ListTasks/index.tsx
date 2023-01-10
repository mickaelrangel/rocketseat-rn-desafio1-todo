import { ClipboardText } from "phosphor-react-native";
import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { TaskProps } from "../../screens/Home";
import { TaskDetail } from "../TaskDetail";
import { styles } from "./styles";

type ListTasksProps = {
  tasks: TaskProps[];
  onDeleteTask: (taskId: string) => void;
  completeTask: (taskId: string, isCompleted: boolean) => void;
};

export function ListTasks({
  tasks,
  onDeleteTask,
  completeTask,
}: ListTasksProps) {
  const [totalCreatedTasks, setTotalCreatedTasks] = useState(0);
  const [totalCompletedTasks, setTotalCompletedTasks] = useState(0);

  useEffect(() => {
    setTotalCreatedTasks(tasks.length);
    const totalCompletedTasks = tasks.filter((task) => task.isCompleted);
    setTotalCompletedTasks(totalCompletedTasks.length);
  }, [tasks]);

  return (
    <View style={styles.containerList}>
      <View style={styles.container}>
        <View style={styles.infoTasks}>
          <View style={styles.infoQuantityGroup}>
            <Text style={[styles.text, { color: "#4EA8DE" }]}>Criadas</Text>
            <View style={styles.infoQuantity}>
              <Text style={{ color: "#FFF", fontWeight: "bold" }}>
                {totalCreatedTasks}
              </Text>
            </View>
          </View>

          <View style={styles.infoQuantityGroup}>
            <Text style={[styles.text, { color: "#8284FA" }]}>Concluídas</Text>
            <View style={styles.infoQuantity}>
              <Text style={{ color: "#FFF", fontWeight: "bold" }}>
                {totalCompletedTasks}
              </Text>
            </View>
          </View>
        </View>
      </View>

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskDetail
            key={item.id}
            task={item}
            onDeleteTask={onDeleteTask}
            completeTask={completeTask}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <View style={styles.containerEmptyList}>
            <ClipboardText size={64} color="#808080" />
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 16,
                color: "#808080",
                lineHeight: 30,
                marginTop: 20,
              }}
            >
              Você ainda não tem tarefas cadastradas
            </Text>
            <Text style={{ fontSize: 16, color: "#808080" }}>
              Crie tarefas e organize seus itens a fazer
            </Text>
          </View>
        )}
      />
    </View>
  );
}
