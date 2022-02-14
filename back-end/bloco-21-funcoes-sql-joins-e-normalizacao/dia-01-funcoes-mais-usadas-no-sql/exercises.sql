SELECT * FROM hr.employees;

SELECT ROUND(MAX(SALARY), 2) FROM hr.employees;

SELECT ROUND(MAX(SALARY) - MIN(SALARY), 2) FROM hr.employees;

SELECT JOB_ID, AVG(SALARY) FROM hr.employees GROUP BY JOB_ID ORDER BY AVG(SALARY) DESC;

SELECT ROUND(SUM(SALARY), 2) FROM hr.employees;

SELECT ROUND(MAX(SALARY), 2), ROUND(MIN(SALARY), 2), ROUND(SUM(SALARY), 2), ROUND(AVG(SALARY), 2) FROM hr.employees;

SELECT JOB_ID, COUNT(*) FROM hr.employees WHERE JOB_ID = 'IT_PROG';

SELECT JOB_ID, ROUND(SUM(SALARY), 2) FROM hr.employees GROUP BY JOB_ID;

SELECT JOB_ID, ROUND(SUM(SALARY), 2) FROM hr.employees GROUP BY JOB_ID HAVING JOB_ID = 'IT_PROG';

SELECT JOB_ID, ROUND(AVG(SALARY), 2) FROM hr.employees GROUP BY JOB_ID HAVING JOB_ID != 'IT_PROG' ORDER BY AVG(SALARY) DESC;

SELECT DEPARTMENT_ID, ROUND(AVG(SALARY), 2), COUNT(*) FROM hr.employees GROUP BY DEPARTMENT_ID HAVING COUNT(*) > 10;

SELECT IF (LEFT(PHONE_NUMBER, 3) = '515', REPLACE(PHONE_NUMBER, LEFT(PHONE_NUMBER, 3), '777'), PHONE_NUMBER) FROM hr.employees;

SELECT * FROM hr.employees WHERE CHAR_LENGTH(FIRST_NAME) >= 8;

SELECT EMPLOYEE_ID, FIRST_NAME, YEAR(HIRE_DATE) FROM hr.employees;

SELECT EMPLOYEE_ID, FIRST_NAME, DAY(HIRE_DATE) FROM hr.employees;

SELECT EMPLOYEE_ID, FIRST_NAME, MONTH(HIRE_DATE) FROM hr.employees;

SELECT UCASE(FIRST_NAME) FROM hr.employees;

SELECT LAST_NAME, HIRE_DATE FROM hr.employees WHERE HIRE_DATE LIKE '1987-07%';

SELECT FIRST_NAME, LAST_NAME, DATEDIFF(CURRENT_DATE(), HIRE_DATE) FROM hr.employees;
