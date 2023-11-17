canvas = document.getElementById("mycanvas");
ctx = canvas.getContext("2d");

ctx.beginPath();                                            
ctx.strokeStyle = "gray";                                    
ctx.strokeWidth = 1;                                        
ctx.rect(180, 180, 430, 200);                       
ctx.stroke();

ctx.beginPath();                                            
ctx.strokeStyle = "blue";                                    
ctx.strokeWidth = 5;                                        
ctx.arc(300, 240, 40, 0, 2*Math.PI);                       
ctx.stroke(); 

ctx.beginPath();                                            
ctx.strokeStyle = "black";                                    
ctx.strokeWidth = 5;                                        
ctx.arc(400, 240, 40, 0, 2*Math.PI);                       
ctx.stroke(); 

ctx.beginPath();                                            
ctx.strokeStyle = "red";                                    
ctx.strokeWidth = 5;                                        
ctx.arc(500, 240, 40, 0, 2*Math.PI);                       
ctx.stroke(); 

ctx.beginPath();                                            
ctx.strokeStyle = "yellow";                                    
ctx.strokeWidth = 5;                                        
ctx.arc(350, 290, 40, 0, 2*Math.PI);                       
ctx.stroke(); 

ctx.beginPath();                                            
ctx.strokeStyle = "green";                                    
ctx.strokeWidth = 5;                                        
ctx.arc(450, 290, 40, 0, 2*Math.PI);                       
ctx.stroke(); 
