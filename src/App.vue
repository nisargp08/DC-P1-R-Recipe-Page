<template>
<div id="app">
    <div class="flex min-h-screen lg:max-w-screen-lg lg:m-auto lg:pt-6">
        <div class="flex flex-col w-full p-3">
            <header>
                <div>
                    <h1 class="font-playfair font-bold text-2xl leading-8 lg:text-5xl lg:leading-14">Classic Cheesecake Recipe</h1>
                </div>
            </header>
            <main class="flex-1 mt-3">
                <div>
                    <!-- Intro Text -->
                    <div class="flex">
                        <div>
                            <img class="w-12 h-4 md:w-6 lg:w-4" src="@/assets/images/6dots.svg" alt="">
                        </div>
                        <div class="lg:w-2/3">
                            <p class="font-montserrat italic font-medium text-xs leading-4 px-3 lg:text-sm">Look no further for a creamy and ultra smooth classic cheesecake recipe! Paired with a buttery graham cracker crust, no one can deny its simple decadence. For the best results, bake in a water bath.</p>
                        </div>
                    </div>
                    <!-- Cheesecake Image -->
                    <div class="py-6 lg:py-10">
                        <img class="rounded-xl" src="@/assets/images/photo1.png">
                    </div>
                    <div class="lg:flex">
                        <div class="lg:order-2">
                          <div class="lg:flex lg:flex-col lg:justify-center lg:items-center lg:w-56 lg:h-368px  lg:bg-white lg:rounded-xl lg:shadow-custom">
                              <div class="flex">
                                  <!-- Total Servings -->
                                  <div>
                                      <svg class="inline-block h-4 w-4 fill-current text-orange-500 lg:h-6 lg:w-6" viewBox="0 0 24 24">
                                          <path fill="currentColor" d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7m5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z" />
                                      </svg>
                                  </div>
                                  <div class="px-2">
                                      <p class="font-montserrat font-bold text-2xxs leading-3 text-gray-4 lg:text-xxs">Yields</p>
                                      <p class="font-montserrat font-medium text-xxs leading-3 text-orange-500 lg:text-sm lg:leading-4">12 servings</p>
                                  </div>
                              </div>
                              <div class="flex py-5 lg:flex-col lg:py-0">
                                  <!-- Prep,Cook and Total Time -->
                                  <div class="flex w-1/3 lg:w-full lg:mt-10">
                                      <div>
                                          <svg class="inline-block h-4 w-4 fill-current text-gray-2 lg:h-6 lg:w-6" viewBox="0 0 24 24">
                                              <path fill="currentColor" d="M12 20a8 8 0 008-8 8 8 0 00-8-8 8 8 0 00-8 8 8 8 0 008 8m0-18a10 10 0 0110 10 10 10 0 01-10 10C6.47 22 2 17.5 2 12A10 10 0 0112 2m.5 5v5.25l4.5 2.67-.75 1.23L11 13V7h1.5z" />
                                          </svg>
                                      </div>
                                      <div class="px-2">
                                          <p class="font-montserrat font-bold text-2xxs leading-3 text-gray-4 uppercase lg:text-xxs">Prep time</p>
                                          <p class="font-montserrat font-medium text-xxs leading-3 text-gray-1 lg:text-sm lg:leading-4">45 minutes</p>
                                      </div>
                                  </div>
                                  <div class="flex w-1/3 lg:w-full lg:mt-10">
                                      <div>
                                          <svg class="inline-block h-4 w-4 fill-current text-gray-2 lg:h-6 lg:w-6" viewBox="0 0 24 24">
                                              <path fill="currentColor" d="M12 20a8 8 0 008-8 8 8 0 00-8-8 8 8 0 00-8 8 8 8 0 008 8m0-18a10 10 0 0110 10 10 10 0 01-10 10C6.47 22 2 17.5 2 12A10 10 0 0112 2m.5 5v5.25l4.5 2.67-.75 1.23L11 13V7h1.5z" />
                                          </svg>
                                      </div>
                                      <div class="px-2">
                                          <p class="font-montserrat font-bold text-2xxs leading-3 text-gray-4 uppercase lg:text-xxs">Cook time</p>
                                          <p class="font-montserrat font-medium text-xxs leading-3 text-gray-1 lg:text-sm lg:leading-4">1 hour</p>
                                      </div>
                                  </div>
                                  <div class="flex w-1/3 lg:w-full lg:mt-10">
                                      <div>
                                          <svg class="inline-block h-4 w-4 fill-current text-gray-2 lg:h-6 lg:w-6" viewBox="0 0 24 24">
                                              <path fill="currentColor" d="M12 20a8 8 0 008-8 8 8 0 00-8-8 8 8 0 00-8 8 8 8 0 008 8m0-18a10 10 0 0110 10 10 10 0 01-10 10C6.47 22 2 17.5 2 12A10 10 0 0112 2m.5 5v5.25l4.5 2.67-.75 1.23L11 13V7h1.5z" />
                                          </svg>
                                      </div>
                                      <div class="px-2">
                                          <p class="font-montserrat font-bold text-2xxs leading-3 text-gray-4 uppercase lg:text-xxs">Total time</p>
                                          <p class="font-montserrat font-medium text-xxs leading-3 text-gray-1 lg:text-sm lg:leading-4">7-7.5 hours </p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                        </div>
                        <div>
                            <div>
                                <!-- Ingredients -->
                                <h3 class="font-playfair font-bold text-lg leading-6 text-gray-1 lg:text-2xl lg:leading-8">Ingredients</h3>
                                <div>
                                    <p class="font-playfair italic font-normal text-base leading-5 text-gray-1 pt-3 pb-4 lg:pt-8 lg:pb-6 lg:text-lg lg:leading-6">Graham Cracker Crust</p>
                                    <div v-for="(item,index) in ingredients.grahamCracker" :key="index" class="flex pt-2">
                                        <div class="pt-2px">
                                            <input :id="'gcc-'+index" type="checkbox">
                                        </div>
                                        <div class="pl-3 lg:pl-4">
                                            <label :for="'gcc-'+index" class="font-montserrat font-normal text-sm leading-6 text-gray-1 lg:text-base lg:leading-6">
                                                <span v-html="item"></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="mt-8">
                                    <p class="font-playfair italic font-normal text-base leading-5 text-gray-1 pt-3 pb-4 lg:text-lg lg:leading-6">Cheesecake</p>
                                    <div v-for="(item,index) in ingredients.cheesecake" :key="index" class="flex pt-2">
                                        <div class="pt-2px">
                                            <input :id="'cc-'+index" type="checkbox">
                                        </div>
                                        <div class="pl-3">
                                            <label :for="'cc-'+index" class="font-montserrat font-normal text-sm leading-6 text-gray-1 lg:text-base lg:leading-6">
                                                <span v-html="item"></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-6">
                                <!-- Instructions -->
                                <h3 class="font-playfair font-bold text-2xl leading-8 text-gray-1 lg:text-2xl lg:leading-8">Instructions</h3>
                                <div class="mt-8">
                                    <div v-for="(item,index) in instructions" :key="index" class="flex mt-6">
                                        <div>
                                            <div class="flex justify-center bg-orange-500 w-10 h-10 rounded-md">
                                                <p class="font-playfair font-bold text-2xl leading-8 text-white h-full">{{index+1}}</p>
                                            </div>
                                        </div>
                                        <div class="pl-4 lg:pl-6">
                                            <label :for="'gcc-'+index" class="font-montserrat font-normal text-base leading-5 text-black">
                                                <span v-html="item"></span>
                                            </label>
                                        </div>
                                    </div>
                                    <div class="mt-6 lg:mt-14">
                                        <p class="font-montserrat italic font-normal text-xs text-gray-4 lg:text-base">
                                            Source:<br class="lg:hidden"> https://sallysbakingaddiction.com/classic-cheesecake/</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <footer class="mt-16 lg:mt-32">
                <div class="flex flex-col justify-center items-center">
                    <div class="border-t border-gray-5 w-2/3"></div>
                    <p class="font-montserrat font-semibold text-sm leading-4 text-gray-5 pb-5 pt-2">Nisarg Patel @ DevChallenges.io</p>
                </div>
            </footer>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'App',
    components: {},
    data() {
        return {
            //Ingredients
            ingredients: {
                grahamCracker: [
                    '1 and 1/2 cups (150g) <strong>graham cracker crumbs</strong> (about 10 full sheet graham crackers)',
                    '5 Tablespoons (70g) <strong>unsalted butter</strong>, melted',
                    '1/4 cup (50g) <strong>granulated sugar</strong>'
                ],
                cheesecake: [
                    'four 8-ounce blocks (904g) full-fat <strong>cream cheese</strong>, softened to room temperature',
                    '1 cup (200g) <strong>granulated sugar</strong>',
                    '1 cup (240g) full-fat <strong>sour cream</strong>, at room temperature',
                    '1 teaspoon <strong>pure vanilla extract</strong>',
                    '2 teaspoons <strong>fresh lemon juice</strong> (optional, but recommended)',
                    '3 large <strong>eggs</strong>, at room temperature',
                    'topping suggestions: <em>salted caramel, lemon curd, strawberry topping, chocolate ganache, red wine chocolate ganache, fresh fruit, whipped cream, or raspberry sauce</em> (recipe in notes)',
                ]
            },
            //Instructions
            instructions: [
                'Adjust the oven rack to the lower-middle position and preheat oven to 350°F (177°C).',
                '<strong>Make the crust:</strong> Using a food processor, pulse the graham crackers into crumbs. Pour into a medium bowl and stir in sugar and melted butter until combined. (You can also pulse it all together in the food processor.) Mixture will be sandy. Press firmly into the bottom and slightly up the sides of a 9-inch or 10-inch springform pan. No need to grease the pan first. I use the bottom of a measuring cup to pack the crust down tightly. Pre-bake for 8 minutes. Remove from the oven and place the hot pan on a large piece of aluminum foil. The foil will wrap around the pan for the water bath in step 4. Allow crust to slightly cool as you prepare the filling.',
                '<strong>Make the filling:</strong> Using a handheld or stand mixer fitted with a paddle attachment, beat the cream cheese and granulated sugar together on medium-high speed in a large bowl until the mixture is smooth and creamy, about 2 minutes. Add the sour cream, vanilla extract, and lemon juice then beat until fully combined. On medium speed, add the eggs one at a time, beating after each addition until just blended. After the final egg is incorporated into the batter, stop mixing. To help prevent the cheesecake from deflating and cracking as it cools, avoid over-mixing the batter as best you can.',
                '<strong>Prepare the simple water bath (see note)</strong> Boil a pot of water. You need 1 inch of water in your roasting pan for the water bath, so make sure you boil enough. I use an entire kettle of hot water. As the water is heating up, wrap the aluminum foil around the springform pan. Pour the cheesecake batter on top of the crust. Use a rubber spatula or spoon to smooth it into an even layer. Place the pan inside of a large roasting pan. Carefully pour the hot water inside of the pan and place in the oven. (Or you can place the roasting pan in the oven first, then pour the hot water in. Whichever is easier for you.)',
                'Bake cheesecake for 55-70 minutes or until the center is almost set. When it’s done, the center of the cheesecake will slightly wobble if you gently shake the pan. Turn the oven off and open the oven door slightly. Let the cheesecake sit in the oven in the water bath as it cools down for 1 hour. Remove from the oven and water bath, then cool cheesecake completely at room temperature. Then refrigerate the cheesecake for at least 4 hours or overnight.',
                'Use a knife to loosen the chilled cheesecake from the rim of the springform pan, then remove the rim. Using a clean sharp knife, cut into slices for serving. For neat slices, wipe the knife clean and dip into warm water between each slice.',
                'Serve cheesecake with desired toppings. Cover and store leftover cheesecake in the refrigerator for up to 5 days.',
            ]
        }
    }
}
</script>

<style lang="scss">
#app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

input[type=checkbox] {
    transform: scale(1.2);
}
</style>
