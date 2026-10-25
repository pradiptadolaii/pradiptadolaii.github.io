import assert from 'node:assert/strict';
import {answerQuestion} from '../assets/medorbit-knowledge.mjs';
assert.equal(answerQuestion('Who is Pradipta?').id,'about');
assert.equal(answerQuestion('Tell me about education').id,'education');
assert.equal(answerQuestion('Explain OncoLens').key,'oncolens');
assert.equal(answerQuestion('Tell me more','oncolens').key,'oncolens');
assert.equal(answerQuestion('All five Forage experiences').id,'experience');
assert.equal(answerQuestion('What is the report password?').id,'contact');
assert.match(answerQuestion('prescribe medication').answer,/cannot provide medical/);
assert.match(answerQuestion('What is his salary?').answer,/verified answer/);
assert.match(answerQuestion('ECG').answer,/private/);
console.log('PASS: MedOrbit topic routing, follow-up context, unknown facts, private access, and medical scope.');

assert.equal(answerQuestion('What are his test scores?').id,'test-scores');
assert.equal(answerQuestion('SVMCM scholarship').id,'awards');
assert.match(answerQuestion('cricket achievements').answer,/Wicketkeeper twice/);
assert.match(answerQuestion('credentials').answer,/23 preserved/);
assert.match(answerQuestion('copyright').answer,/All rights reserved/);

for (const question of ['what is Higher Secondary marks?', 'Class 12 percentage?', 'HS result', '12th score']) {
 const result=answerQuestion(question);
 assert.equal(result.key,'higher-secondary-result');
 assert.match(result.answer,/84\.36 percentile/);
 assert.match(result.answer,/does not provide a marks total or percentage/);
}
assert.equal(answerQuestion('test scores').id,'test-scores');

assert.equal(answerQuestion("Where is he based?").key,"location");
assert.equal(answerQuestion("What languages does he speak?").key,"languages");
assert.equal(answerQuestion("His interests?").key,"interests");
assert.equal(answerQuestion("What is his CGPA?").key,"cgpa");
assert.equal(answerQuestion("Which university?").key,"degree");
assert.equal(answerQuestion("Higher Secondary education").key,"higher-secondary");
assert.equal(answerQuestion("STTP").key,"sttp");
assert.equal(answerQuestion("IISc specialization").key,"sensors");
assert.equal(answerQuestion("Gen AI Tools assessment").key,"genai-score");
assert.equal(answerQuestion("Data analytics assessment score").key,"analytics-score");
assert.equal(answerQuestion("IT class test").key,"it-class");
assert.equal(answerQuestion("NBCE result").key,"it-diploma");
assert.equal(answerQuestion("Class VI result").key,"science-score");
assert.equal(answerQuestion("SVMCM scholarship").key,"scholarship");
assert.equal(answerQuestion("Cricket").key,"cricket");
assert.equal(answerQuestion("Volleyball").key,"volleyball");
assert.equal(answerQuestion("DBBV competition award").key,"dbbv-award");
assert.equal(answerQuestion("Block level medal").key,"science-medal");
assert.equal(answerQuestion("School sports").key,"school-sport");
assert.equal(answerQuestion("Instagram").key,"instagram");
assert.equal(answerQuestion("Inquiry form").key,"inquiry");
assert.equal(answerQuestion("CV").key,"resume-file");
assert.equal(answerQuestion('More','cricket').key,'cricket');
