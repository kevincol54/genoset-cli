'use strict'

import male from 'genoset-male'
import g101 from 'genoset-101'
import g119 from 'genoset-119'
import g122 from 'genoset-122'
import g137 from 'genoset-137'
import g150 from 'genoset-150'
import g152 from 'genoset-152'
import g159 from 'genoset-159'
import g191 from 'genoset-191'
import g209 from 'genoset-209'
import g211 from 'genoset-211'
import g216 from 'genoset-216'
import g228 from 'genoset-228'
import g243 from 'genoset-243'
import g248 from 'genoset-248'
import g291 from 'genoset-291'

module.exports = (table, input) => {
  input = input[1]
  return table.push(
    ['Male', male(input), 'Is male'],
    ['101', g101(input), 'Most likely able to digest lactose and dairy products'],
    ['119', g119(input), 'Potential 6.5x increased risk for breast cancer'],
    ['122', g122(input), 'Potential increased risk of baldness'],
    ['137', g137(input), 'Potential ~5.7x increased risk for thyroid cancer compared to noncarriers'],
    ['150', g150(input), 'Of the "rapid metabolizer" phenotype for CYP2C19.'],
    ['152', g152(input), 'Of the "poor metabolizer" phenotype for CYP2C19.'],
    ['159', g159(input), 'Of the "rapid metabolizer" phenotype for CYP1A2.'],
    ['191', g191(input), 'You have impaired NSAID metabolism'],
    ['209', g209(input), 'Potential 1.7x increased risk for panic disorder'],
    ['211', g211(input), 'Drinking alcohol has greater effect because problem metabolizing ethanol with ADH (alcohol dehydrogenase)'],
    ['216', g216(input), 'Two copies of the ApoE-ε4 allele'],
    ['228', g228(input), 'You are affected by sickle cell anemia'],
    ['243', g243(input), 'Potential 50% increased risk of prostate cancer patients dying of the disease'],
    ['248', g248(input), 'You have a lower risk for developing Parkinsons Disease'],
    ['291', g291(input), 'Determines if a genome is lower risk for heart attack or cardiovascular incident, ~10-20% of people']
  )
}
