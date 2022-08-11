from Employee import Employee
# from HashMap import HashMap


employees = [(14, "name1"), (23, "name2"), (10, "name3"), (9, "name4")]
employee_objects = [Employee(id_num, name) for (id_num, name) in employees]


#   employee_registry = HashMap()

# Instanciando a classe Dict
employee_registry = {}


# Inserindo dados

#   for employee in employee_objects:
#       employee_registry.insert(employee)

#   objeto[chave]         = valor
#   employee_registry[14] = 'name1'
#   employee_registry[23] = 'name2'
#   employee_registry[10] = 'name3'
#   employee_registry[9]  = 'name4'

for employee in employee_objects:
    employee_registry[employee.id_num] = employee.name

# print(employee_registry.get_value(23))
# print(employee_registry.get_value(10))
print(employee_registry)


# Alterando o nome do id 10

#   employee_registry.update_value(10, "name30")

# objeto[chave]       = novo_valor
employee_registry[10] = 'name30'

print(f"Novo valor do id 10, após a atualização: {employee_registry[10]}")
