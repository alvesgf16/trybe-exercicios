from Employee import Employee
# from HashMap import HashMap

employees = [(14, "name1"), (23, "name2"), (10, "name3"), (9, "name4")]

employee_objects = [Employee(id_num, name) for (id_num, name) in employees]
