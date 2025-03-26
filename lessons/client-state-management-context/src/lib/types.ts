export type Course = {
  id: string,
  title: string,
  description: string,
}

export type Cart = {
  courses: ReadonlyArray<Course>,
}
