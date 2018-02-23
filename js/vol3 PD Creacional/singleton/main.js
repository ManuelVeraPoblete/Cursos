var tareaManejador = require('./tareaManejador');
var repo           = require('./repo');
var mireporte      = repo();

mireporte.save('desde main');
mireporte.save('desde main');
mireporte.save('desde main');
tareaManejador.save();
tareaManejador.save();
tareaManejador.save();
tareaManejador.save();
