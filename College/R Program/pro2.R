library(dplyr)
library(ggplot2)
d = read.csv("C:\\College\\programs\\program-2\\e-com.csv")
attach(d)
q1 = d[c(1:6),]
q2 = d[c(7:12),]
# Part 1
getQ = function(qDF,con){
  v = apply(qDF, 2, sum)
  aM = colnames(qDF[which(v == con(v))])
  aI = con(v)
  return(list(aM,aI))
}
displayQ = function(q,con,title){
  attach(q)
  qaDF     = select(q,starts_with("a"))
  amazon   = getQ(qaDF,con)
  qfDF     = select(q,starts_with("f"))
  flipkart = getQ(qfDF,con)
  qsDF     = select(q,starts_with("s"))
  snapdeal = getQ(qsDF,con)
  l = c(amazon,flipkart,snapdeal)
  mobile = c(l[[1]],l[[3]],l[[5]])
  item = c(l[[2]],l[[4]],l[[6]])
  df = data.frame(mobile,item)
  baseplot = ggplot(data=df,mapping=aes(x=mobile,y=item))
  baseplot + geom_point(size=3,aes(color=mobile)) + labs(x="Mobile",y="No of sales" ,title =title )
}
displayQ(q=q1,con = max,title="      1st Quater  Sales")
displayQ(q=q2,con = max,title="      2nd Quater Sales")
# Part 2
checkGreat = function(web,a){
  web > a
}
getHighSold = function(site){
  web =  select(d,starts_with(site))
  a = sum(apply(web,2, sum))/36
  month = apply(web, 1, checkGreat(web,a))
  print(month)
}

getHighSold(site="f")


flipkart =  select(d,starts_with("f"))
a = sum(apply(flipkart,2, sum))/36
fMonth = filter(d , flipkartSamsung > a | flipkartRedmi > a | flipkartVivo > a)["mon"]
fMonth

amazon =  select(d,starts_with("a"))
a = sum(apply(amazon,2, sum))/36
aMonth = filter(d , amazonSamsung > a | amazonVivo > a | amazonRedmi > a)["mon"]
aMonth

snapdeal =  select(d,starts_with("s"))
a = sum(apply(snapdeal,2, sum))/36
sMonth = filter(d , snapdealSamsung > a | snapdealVivo > a | snapdealRedmi > a)["mon"]
sMonth