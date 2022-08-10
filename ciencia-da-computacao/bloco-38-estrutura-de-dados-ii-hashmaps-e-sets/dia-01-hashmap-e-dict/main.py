from Employee import Employee
from HashMap import HashMap

employees = [(14, "name1"), (23, "name2"), (10, "name3"), (9, "name4")]

employee_objects = [Employee(id_num, name) for (id_num, name) in employees]

employee_hash_map = HashMap()

for employee in employee_objects:
    employee_hash_map.insert(employee)

print(employee_hash_map.get_value(23))
