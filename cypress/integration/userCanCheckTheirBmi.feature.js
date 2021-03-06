

describe('User can check their Bmi', () => {
	it('user can enter weight and height', () => {
		cy.visit('http://localhost:3001')
		cy.contains('BMI Calculator')
		cy.get('#weight').type('70')
		cy.get('#height').type('177')
		cy.get('#Calculate').click()
	})

	it('displays a BMI value of 21.8327391708', () => {
		cy.get('#results').should('contain', '21.8327391708')
	})
})