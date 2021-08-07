

describe('User can check their Bmi', () => {
	it('user can enter weight and height', () => {
		cy.visit('http://localhost:3001')
		cy.contains('BMI Calculator')
		cy.get('#weight').type('70')
		cy.get('#height').type('177')
		cy.get('#Calculate').click()
	})
})