const updateStudentInfo = <T extends student>(student: T, newInfo: Partial<T>): T => {
  return { ...student, ...newInfo };
};
