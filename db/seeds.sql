INSERT INTO department (name)
VALUES  ("Accounting"),
        ("Human Resources"),
        ("OPS");

INSERT INTO roles (title, salary, department_id)
VALUES ("Manager", 98000, 1),
       ("Team Lead", 60000, 2),
       ("Associate", 35000,3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Nam-joon", "Kim", 5, 1),
       ("Seok-jin", "Kim", 10, 2),
       ("Yoon-gi", "Min", 20, 3);