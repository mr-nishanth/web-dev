library(dplyr)
library(reshape2)
library(scales)
library(ggplot2)
# Part 1
r = read.csv("C:\\College\\programs\\program-3\\childBrith.csv")
attach(r)
d = r[,c(2:5)]
rainfall_cor = round(cor(d),2)
m = melt(rainfall_cor,varnames=c("city1","city2"),value.name="correlation")
m = m[order(m$correlation),]
base1 = ggplot(m,aes(x=city1,y=city2))
base1 + geom_tile(aes(fill=correlation)) + 
  scale_fill_gradient2(low="green",min="yellow",high="red",guide = guide_colorbar(title = "Child Birth Correlation"))  
# Part 2
b = read.csv("C:\\College\\programs\\program-3\\bp8-18.csv")
getBP = function(age1,age2,gen){
  a = filter(b,age >=age1 & age <=age2)
  aBP = filter(a,gender == gen)["bp"]
  level = sum(aBP)/count(aBP)
  print(level)
  if (level <= 120){
    print("BP Normal")
  }else{
    print("High Normal")
  }
}
getBP(age1=50,age2=60,gen="m")
getBP(age1=50,age2=60,gen="f")
getBP(age1=60,age2=70,gen="m")
getBP(age1=60,age2=70,gen="f")
