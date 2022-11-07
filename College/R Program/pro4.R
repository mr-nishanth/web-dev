library(dplyr)
library(ggplot2)
h = read.csv("C:\\College\\programs\\program-4\\heightAndWeight.csv")
attach(h)
findT_Test = function(df,gen,b,a){
  b = filter(df,gender == gen)[b]
  a = filter(df,gender == gen)[a]
  t.test(b,a)
}
findT_Test(h,"m","beforeHeight","afterHeight")
#p-value = 4.469e-08
# H0-> NE , 4.469e-08 < 0.05 , H0 R   [ Effect E]
findT_Test(h,"f","beforeHeight","afterHeight")
#p-value = 0.0001709
# H0-> NE , 0.0001709 < 0.05 , H0 R   [ Effect E ]
findT_Test(h,"m","beforeWeight","afterWeight")
#p-value = 1.802e-07
# H0-> NE , 1.802e-07 < 0.05 , H0 R   [ Effect E ]
findT_Test(h,"f","beforeWeight","afterWeight")
#p-value = 2.041e-06
# H0-> NE , 2.041e-06 < 0.05 , H0 R   [ Effect E ]

      # ------------------------------------------------------------
c = read.csv("C:\\College\\programs\\program-4\\covidWithNo.csv")
attach(c)
c
plotAge = function(age1 , age2,ageS,title){
  a = filter(c,age > age1 & age <= age2)
  aC = sum(filter(c,age > age1 & age <= age2)["no"]) 
  cwSE = sum(filter(a , sideEffect=="y" & type=="cw")["no"])
  cwNSE = sum(filter(a , sideEffect=="n" & type=="cw")["no"])
  csSE = sum(filter(a , sideEffect=="y" & type=="cs")["no"])
  csNSE = sum(filter(a , sideEffect=="n" & type=="cs")["no"])
  x = c(sprintf("%s CS SE",ageS),sprintf("%s CS NSE",ageS),sprintf("%s CW SE",ageS)
        ,sprintf("%s CW NSE",ageS))
  y = c(csSE,csNSE,cwSE,cwNSE)
  df = data.frame(x,y)
  print.data.frame(df)
  ggplot(df,aes(x,y)) + geom_point(aes(color=x)) + labs(title = title)
}
plotAge(age1 = 50,age2 = 60,ageS = "50 - 60", title = "      50 - 60 age")
plotAge(age1 = 60,age2 = 70,ageS = "60 - 70", title = "      60 - 70 age")
plotAge(age1 = 70,age2 = 80,ageS = "70 - 80", title = "      70 - 80 age")

