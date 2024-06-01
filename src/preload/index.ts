import { contextBridge } from "electron"

//if js context is not isolated then throw error
if (!process.contextIsolated) {
  throw new Error('contextIsolation must be enabled in the BrowserWindow')
}


//hum context variables banayege jinko bridge krna padega 
try {
  contextBridge.exposeInMainWorld('context', {
    //TODO
  })
} catch(error) {
  console.log(error)
}