-- 对users表中的数据，按照status字段进行升序排列
-- select * from users order by status

-- 按照id对结果进行降序的排序 desc 表示降序排序 asc表示升序（默认情况下就是升序排序的）
-- select * from users order by id desc

-- 对users表中的数据，先按照status进行降序排序，再按照username字母的顺序，进行升序的排序
-- select * from users order by status desc, username asc

-- 使用 count(*) 来统计users表中，状态为0用户的总数量
-- select count(*) from users where status=0

-- 使用 AS 关键字给列起别名
-- select count(*) as total from users where status=0
select username as uname, password as upwd from users