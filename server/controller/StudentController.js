const temp = require('../template');

const StudentController = {
  createEval(req, res, next) {

    const para = `${req.body.fname} ${temp.intro[0]} ${req.body.age} ${
      temp.intro[1]
    } ${req.body.sex === 'male' ? 'boy.' : 'girl.'} ${temp.intro[2]} ${
      req.body.reason === 'parent'
        ? 'is being conducted due to the concerns of the parent.'
        : 'is taking place due to concerns expressed by the teacher.'
    } ${temp.intro[3]} ${req.body.fname} ${temp.intro[4]} ${
      req.body.conditions
    }. ${req.body.sex === 'male' ? 'He' : 'She'} ${temp.intro[5]} ${
      req.body.meds
    } ${temp.intro[6]}${temp.intro[7]} ${req.body.roll} ${temp.intro[8]}, ${
      temp.intro[9]
    }, ${req.body.sit} ${temp.intro[8]} ${temp.intro[10]} ${req.body.crawl} ${
      temp.intro[8]
    }, ${temp.intro[11]} ${req.body.walk} ${temp.intro[8]}, ${temp.intro[12]} ${
      req.body.words
    } ${temp.intro[8]}. \n\n ${temp.beery} \n\n ${
      req.body.fname
    } performed as follows on the three tests. ${
      req.body.sex === 'male' ? 'He' : 'She'
    } scored ${req.body.scVMI}, ${req.body.scVP}, and ${
      req.body.scMC
    } on the Visual Motor Integration, Visual Perceptual, and Motor Coordination tests, respectively. These scores suggests ${
      req.body.sex === 'male' ? 'he' : 'she'
    } is performing ${req.body.prVMI} in the area of visual motor, ${
      req.body.prVP
    } as it relates to visual perception, and ${
      req.body.prMC
    } in terms of motor coordination in comparison to ${
      req.body.sex === 'male' ? 'his' : 'her'
    } peers.`;

    res.locals.para = para;  
    next();
  },


};

module.exports = StudentController;
