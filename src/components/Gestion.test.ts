import combat from './Gestion';
import onClick from './Gestion';
import addHero from './Gestion';
import choixNomPartie from './Gestion';

it('test', () => {
    expect(onClick).toEqual(combat);
});
it('test2',()=>{
    expect(onClick).toEqual(addHero);
});
it ('test3',()=>{
expect(onClick).toEqual(choixNomPartie);
});