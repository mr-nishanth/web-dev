library(dplyr)
library(ggplot2)
d = read.csv("C:\\College\\programs\\program-1\\data.csv")
attach(d)
getNameAndMark = function(r,dm,iot,mor,bor,inor,header){
  rN = filter(d,r==max(r))["name"]
  rM = max(r)
  dmN = filter(d,dm==max(dm))["name"]
  dmM = max(dm)
  iotN = filter(d,iot==max(iot))["name"]
  iotM = max(iot)
  N=data.frame(rN,dmN,iotN)
  M=data.frame(rM,dmM,iotM)
  res = data.frame(t(N),t(M))
  colnames(res) = c("Name","Mark")
  rownames(res) = c("R","DM","IoT")
  bp = ggplot(res,aes(x=Name,y=Mark)) + geom_text(aes(label=rownames(res)))
  bp + theme(
    panel.background = element_rect(fill = inor , colour = bor,size = 2, linetype = "solid"),
    plot.background = element_rect(fill = mor), plot.title = element_text(hjust = 0.5)
  ) + ggtitle(header) 
}
# External
getNameAndMark(rExt,dmExt,iotExt,mor="lightgreen",bor="red",inor = 'yellow',header="Highest mark holders in External")
#Internal
rIT = (rInt1+rInt2)/2
dmIT = (dmInt1+dmInt2)/2
iotIT = (iotInt1+iotInt2)/2
getNameAndMark(rIT,dmIT,iotIT,mor="lightblue",bor="red",inor = 'green',header="Highest mark holders in Internal")
#EOS
getNameAndMark((rExt+rIT),(dmExt+dmIT),(iotExt+iotIT),mor="snow",bor="red",inor = 'pink',header = "Highest mark holders in EOS")
                                      #----------   Part 2   ----------
avg = (c(rIT+rExt) + c(dmIT+dmExt) + c(iotIT+iotExt))/3
d = as.data.frame(append(d,list(avg),after = 2))
colnames(d) = c("rno","name","avg")

getQuantile = function(mI,header){
  x = as.vector(d[mI,"name"])
  y = as.vector(d[mI,"avg"])
  selected = data.frame(x,y)
  colnames(selected) = c("Name","Mark")
  bp = ggplot(selected,aes(x=Name,y=Mark)) + geom_point(size=4)
  bp + theme(
    panel.background = element_rect(fill = "pink",colour = "red",size = 2, linetype = "solid"),
    plot.background = element_rect(fill = 'lightgreen'),
    plot.title = element_text(hjust = 0.5)
  ) + ggtitle(header) 
  
}
# Above 80 % 
a8 = quantile(avg,0.80)
mI8 = which(avg >= a8)
getQuantile(mI8,header="Selected for Interview")
# Above 60% as well as before 80%
a6 = quantile(avg,0.60)
mI6 = which(avg >= a6)
A6 = setdiff(mI6,mI8)
getQuantile(A6,header="Waiting List")
