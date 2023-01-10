import { PlusCircle } from "phosphor-react-native";
import React, { useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import uuid from "react-native-uuid";
import { ListTasks } from "../../components/ListTasks";
import { LogoIcon } from "../../components/LogoIcon";
import { styles } from "./styles";

export type TaskProps = {
  id: string;
  name: string;
  isCompleted: boolean;
};

export function Home() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [taskDescription, setTaskDescription] = useState<string>("");

  function handleCreateTask() {
    if (taskDescription === "") {
      Alert.alert("Informe a descrição da tarefa!");
      return;
    }

    const taskToCreat: TaskProps = {
      id: uuid.v4().toString(),
      name: taskDescription,
      isCompleted: false,
    };

    setTasks((prevState) => [...prevState, taskToCreat]);
    setTaskDescription("");
  }

  function onDeleteTask(id: string) {
    Alert.alert("Excluir tarefa", "Confirma a exclusão da tarefa?", [
      {
        text: "Sim",
        onPress: () => {
          setTasks((prevState) => prevState.filter((task) => task.id !== id));
          Alert.alert("Tarefa excluída");
        },
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  function completeTask(taskId: string, isCompleted: boolean) {
    const updatedDoneTask = tasks.map((task) => {
      if (task.id === taskId) {
        task.isCompleted = isCompleted;
      }

      return task;
    });

    setTasks(updatedDoneTask);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <LogoIcon />
        <Text style={styles.labelToText}>to</Text>
        <Text style={styles.labelDoText}>do</Text>
      </View>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#808080"
          onChangeText={setTaskDescription}
          value={taskDescription}
        />

        <TouchableOpacity style={styles.button} onPress={handleCreateTask}>
          <PlusCircle size={20} color="#FFF" />
        </TouchableOpacity>
      </View>

      <ListTasks
        tasks={tasks}
        onDeleteTask={onDeleteTask}
        completeTask={completeTask}
      />
    </View>
  );
}
