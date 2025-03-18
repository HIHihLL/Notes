import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";
const tasks = []

const useTasksStore = create((set) => ({
    tasks,
    updateGroupOrder: (sourceIndex, destinationIndex) => {
        set((state) => {
            const newTasks = [...state.tasks];
            const [removed] = newTasks.splice(sourceIndex, 1);
            newTasks.splice(destinationIndex, 0, removed);

            return { tasks: newTasks };
        });
    },

    addNewGroup: (title, icon, colorIcon) => {
        if (!title) return;

        set((state) => ({
            tasks: [
                ...state.tasks,
                {
                    id: uuidv4(),
                    title: title,
                    icon: icon,
                    iconColor: colorIcon,
                    tasks: [],
                    showCompleted: true,
                },
            ],
            icon: "smile",
            colorIcon: "#CBCBCB",
        }));
    },
    removeGroup: (groupId) => {
        set((state) => ({
            tasks: state.tasks.filter((group) => group.id !== groupId),
        }));
    },
    duplicateGroup: (groupId) => {
        set((state) => {
            const groupIndex = state.tasks.findIndex(
                (group) => group.id === groupId
            );
            if (groupIndex === -1) return state;

            const duplicatedGroup = {
                ...state.tasks[groupIndex],
                id: uuidv4(),
            };

            const newTasks = [...state.tasks];
            newTasks.splice(groupIndex + 1, 0, duplicatedGroup);

            return { tasks: newTasks };
        });
    },
    clearGroup: (groupId) => {
        set((state) => ({
            tasks: state.tasks.map((group) =>
                group.id === groupId ? { ...group, tasks: [] } : group
            ),
        }));
    },
    updateTitleGroup: (groupId, newTitle) => {
        if (!newTitle.trim()) return;

        set((state) => ({
            tasks: state.tasks.map((group) =>
                group.id === groupId ? { ...group, title: newTitle } : group
            ),
        }));
    },
    updateIconGroup: (groupId, newIcon) => {
        if (!newIcon.trim()) return;

        set((state) => ({
            tasks: state.tasks.map((group) =>
                group.id === groupId ? { ...group, icon: newIcon } : group
            ),
        }));
    },
    updateIconColorGroup: (groupId, newColor) => {
        if (!newColor.trim()) return;

        set((state) => ({
            tasks: state.tasks.map((group) =>
                group.id === groupId ? { ...group, iconColor: newColor } : group
            ),
        }));
    },
    addNewTask: (groupId, title) => {
        if (!title) return;

        set((state) => ({
            tasks: state.tasks.map((group) =>
                group.id === groupId
                    ? {
                          ...group,
                          tasks: [
                              ...group.tasks,
                              {
                                  id: uuidv4(),
                                  title,
                                  completed: false,
                              },
                          ],
                      }
                    : group
            ),
        }));
    },
    toggleTaskCompletion: (groupId, taskId) => {
        set((state) => ({
            tasks: state.tasks.map((group) =>
                group.id === groupId
                    ? {
                          ...group,
                          tasks: group.tasks.map((task) =>
                              task.id === taskId
                                  ? { ...task, completed: !task.completed }
                                  : task
                          ),
                      }
                    : group
            ),
        }));
    },
    updateTaskOrder: (activeGroupId, sourceIndex, destinationIndex) => {
        set((state) => {
            const activeGroupIndex = state.tasks.findIndex(
                (group) => group.id === activeGroupId
            );

            const newTasks = [...state.tasks[activeGroupIndex].tasks];
            const [removed] = newTasks.splice(sourceIndex, 1);
            newTasks.splice(destinationIndex, 0, removed);

            const newGroupTasks = [...state.tasks];
            newGroupTasks[activeGroupIndex] = {
                ...newGroupTasks[activeGroupIndex],
                tasks: newTasks,
            };

            return { tasks: newGroupTasks };
        });
    },
    toggleShowCompleted: (groupId) => {
        set((state) => ({
            tasks: state.tasks.map((group) =>
                group.id === groupId
                    ? { ...group, showCompleted: !group.showCompleted }
                    : group
            ),
        }));
    },
    updateTitleTask: (groupId, taskId, newTitle) => {
        if (!newTitle.trim()) return;

        set((state) => ({
            tasks: state.tasks.map((group) =>
                group.id === groupId
                    ? {
                          ...group,
                          tasks: group.tasks.map((task) =>
                              task.id === taskId
                                  ? { ...task, title: newTitle }
                                  : task
                          ),
                      }
                    : group
            ),
        }));
    },
    duplicateTask: (groupId, taskId) => {
        set((state) => ({
            tasks: state.tasks.map((group) =>
                group.id === groupId
                    ? {
                          ...group,
                          tasks: group.tasks.reduce((acc, task) => {
                            console.log(acc)
                              acc.push(task);
                              if (task.id === taskId) {
                                  acc.push({
                                      ...task,
                                      id: uuidv4(),
                                  });
                              }
                              return acc;
                          },[]),
                      }
                    : group
            ),
        }));
    },
    deleteTask: (groupId, taskId) => {
        set((state) => ({
            tasks: state.tasks.map((group) =>
                group.id === groupId
                    ? {
                          ...group,
                          tasks: group.tasks.filter(
                              (task) => task.id !== taskId
                          ),
                      }
                    : null
            ),
        }));
    },
}));

export default useTasksStore;
