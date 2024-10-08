from socutils.gto import mole
from socutils.tools.basis_parser import parse_genbas

genbas='/home/xwang405/apps/cfour-x2cso/basis/GENBAS'
ga_basis, ga_so = parse_genbas('GA:DYVDZ-SO', genbas, so_basis=True)
as_basis, as_so = parse_genbas('AS:DYVDZ-SO', genbas, so_basis=True)
print(ga_so, as_so)
print(ga_basis)
mol = mole.Mole()
mol.build(atom='''
As  0.00 0.0 0.0
Ga -2.75 0.0 0.0
''',
basis={'Ga':ga_basis, 'As':as_basis},
sobasis_info=[ga_so, as_so],
nucmod='G',
charge=0,
verbose=4)