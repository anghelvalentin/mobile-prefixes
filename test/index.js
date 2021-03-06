const chai = require('chai')
const mocha = require('mocha')
const assert = chai.assert
const mobilePefixes = require('../index')
const _ = require('lodash')

mocha.describe('mobile phone number series', () => {
  mocha.describe('should has callingCode', () => {
    ['+7', '+995', '+93', '+355', '+213', '+1', '+376', '+244', '+54', '+374', '+297', '+247', '+61', '+672', '+43', '+994', '+973', '+880', '+375', '+32', '+501', '+229', '+975', '+591', '+599', '+387', '+267', '+55', '+246', '+673', '+359', '+226', '+95', '+257', '+855', '+237', '+34', '+238', '+236', '+235', '+56', '+590', '+57', '+269', '+682', '+506', '+385', '+53', '+357', '+420', '+243', '+45', '+253', '+670', '+593', '+20', '+503', '+44', '+240', '+291', '+372', '+251', '+500', '+298', '+691', '+679', '+358', '+33', '+594', '+262', '+508', '+596', '+689', '+241', '+220', '+49', '+233', '+350', '+30', '+299', '+502', '+224', '+245', '+592', '+509', '+504', '+852', '+36', '+354', '+91', '+62', '+98', '+964', '+353', '+972', '+39', '+225', '+47', '+81', '+962', '+254', '+686', '+383', '+965', '+996', '+856', '+371', '+961', '+266', '+231', '+218', '+423', '+370', '+352', '+853', '+261', '+351', '+265', '+60', '+960', '+223', '+356', '+692', '+222', '+230', '+52', '+373', '+377', '+976', '+382', '+212', '+258', '+264', '+674', '+977', '+31', '+687', '+64', '+505', '+227', '+234', '+683', '+850', '+90', '+968', '+92', '+680', '+970', '+507', '+675', '+595', '+86', '+51', '+63', '+48', '+239', '+974', '+242', '+389', '+40', '+250', '+290', '+685', '+378', '+966', '+221', '+381', '+248', '+232', '+65', '+421', '+386', '+677', '+252', '+27', '+82', '+211', '+94', '+249', '+597', '+268', '+46', '+41', '+963', '+886', '+992', '+255', '+66', '+228', '+690', '+676', '+216', '+993', '+688', '+256', '+380', '+971', '+598', '+998', '+678', '+58', '+84', '+681', '+967', '+260', '+263']
      .forEach((prefix) => {
        mocha.it(prefix, () => {
          let prefixes = mobilePefixes.byCallingCode(prefix)
          assert.isAbove(prefixes.length, 0)
          prefixes.forEach((item) => {
            assert.equal(item.callingCode, prefix)
          })
        })
      })
  })

  mocha.describe('should has country', () => {
    ['Abkhazia', 'Afghanistan', 'Albania', 'Algeria', 'American Samoa', 'Andorra', 'Angola', 'Anguilla', 'Antigua And Barbuda', 'Argentina', 'Armenia', 'Artsakh', 'Aruba', 'Ascension Island', 'Australia', 'Australian Antarctic Territory', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia, Plurinational State Of', 'Bonaire, Saint Eustatius And Saba', 'Bosnia & Herzegovina', 'Botswana', 'Brazil', 'British Indian Ocean Territory', 'Virgin Islands (British)', 'Brunei Darussalam', 'Bulgaria', 'Burkina Faso', 'Burma', 'Burundi', 'Cambodia', 'Cameroon', 'Canada', 'Canary Islands', 'Cabo Verde', 'Cayman Islands', 'Central African Republic', 'Ceuta', 'Chad', 'Chagos Islands', 'Chile', 'Christmas Island', 'Cocos (Keeling) Islands', 'Collectivity of Saint Martin', 'Colombia', 'Comoros', 'Cook Islands', 'Costa Rica', 'Croatia', 'Cuba', 'Curaçao', 'Curaçao and the Caribbean Netherlands', 'Cyprus', 'Czech Republic', 'Democratic Republic Of Congo', 'Denmark', 'Diego Garcia', 'Djibouti', 'Dominica', 'Dominican Republic', 'East Timor', 'Easter Island', 'Ecuador', 'Egypt', 'El Salvador', 'United Kingdom', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Ethiopia', 'Falkland Islands', 'Faroe Islands', 'Federated States of Micronesia', 'Fiji', 'Finland', 'France', 'French Guiana', 'French Overseas Departments and Territories', 'French Polynesia', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Gibraltar', 'Greece', 'Greenland', 'Grenada', 'Guadeloupe', 'Guam', 'Guatemala', 'Guernsey', 'Guinea', 'Guinea-bissau', 'Guyana', 'Haiti', 'Hawaii', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran, Islamic Republic Of', 'Iraq', 'Ireland', 'Isle Of Man', 'Israel', 'Italy', 'Côte d\'Ivoire', 'Jamaica', 'Svalbard And Jan Mayen', 'Japan', 'Jersey', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Kosovo', 'Kuwait', 'Kyrgyzstan', 'Lao People\'s Democratic Republic', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macao', 'Madagascar', 'Madeira', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Martinique', 'Mauritania', 'Mauritius', 'Mayotte', 'Melilla', 'Mexico', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Montserrat', 'Morocco', 'Mozambique', 'Myanmar', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'New Caledonia', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Niue', 'Norfolk Island', 'Korea, Republic Of', 'Northern Cyprus', 'Northern Ireland', 'Northern Mariana Islands', 'Norway', 'Oman', 'Pakistan', 'Palau', 'Palestine, State of', 'Panama', 'Papua New Guinea', 'Paraguay', 'People\'s Republic of China', 'Peru', 'Philippines', 'Pitcairn Islands', 'Plazas de soberanía', 'Poland', 'Portugal', 'Príncipe', 'Puerto Rico', 'Qatar', 'Republic Of Congo', 'Macedonia, The Former Yugoslav Republic Of', 'Romania', 'Russian Federation', 'Rwanda', 'Réunion', 'Sahrawi Arab Democratic Republic', 'Saint Barthélemy', 'Saint Helena and Tristan da Cunha (not Ascenscion)', 'Saint Kitts And Nevis', 'Saint Lucia', 'Saint Pierre And Miquelon', 'Saint Vincent And The Grenadines', 'Samoa', 'San Marino', 'Saudi Arabia', 'Scotland', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Sint Maarten', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'South Georgia And The South Sandwich Islands', 'Korea, Democratic People\'s Republic Of', 'South Ossetia', 'South Sudan', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Svalbard', 'Swaziland', 'Sweden', 'Switzerland', 'Syrian Arab Republic', 'São Tomé and Príncipe', 'Taiwan', 'Tajikistan', 'Tanzania, United Republic Of', 'Thailand', 'Togo', 'Tokelau', 'Tonga', 'Trinidad And Tobago', 'Tristan da Cunha', 'Tunisia', 'Turkey', 'Turkmenistan', 'Turks And Caicos Islands', 'Tuvalu', 'Virgin Islands (US)', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United States', 'United States Virgin Islands', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Vatican City', 'Venezuela, Bolivarian Republic Of', 'Viet Nam', 'Wales', 'Wallis And Futuna', 'Western Sahara', 'Yemen', 'Zambia', 'Zimbabwe', 'Åland Islands']
      .forEach((name) => {
        mocha.it(name, () => {
          let prefixes = mobilePefixes.byCountryName(name)
          assert.isAbove(prefixes.length, 0)
        })
      })
  })

  mocha.describe('should has carrier name', () => {
    mocha.it('Megafon', () => {
      assert.equal(mobilePefixes.byCarrierName('Megafon').length, 2)
    })
  })

  mocha.describe('should has mobile prefix', () => {
    mocha.it('921', () => {
      assert.isAbove(mobilePefixes.byMobilePrefix('921').length, 0)
      assert.equal(mobilePefixes.byMobilePrefix('921', 'Russian Federation').length, 1)
    })
    mocha.it('911', () => {
      assert.isAbove(mobilePefixes.byMobilePrefix('911').length, 0)
      assert.equal(mobilePefixes.byMobilePrefix('911', 'Russian Federation').length, 1)
    })
    mocha.it('743', () => {
      assert.isAbove(mobilePefixes.byMobilePrefix('743').length, 0)
      assert.equal(mobilePefixes.byMobilePrefix('743', 'Romania').length, 1)
    })
  })

  mocha.describe('mobile phone should has data information', () => {
    mocha.it('in Brazil', () => {
      assert.isAbove(mobilePefixes.byPhone('+557790000', 'Brazil').length, 0)
    })
    mocha.it('in Romania', () => {
      assert.isAbove(mobilePefixes.byPhone('+40743xx', 'Romania').length, 0)
    })
    mocha.it('in Vietnam', () => {
      assert.isAbove(mobilePefixes.byPhone('+8410xxxxx', 'Viet nam').length, 0)
    })
    mocha.it('in Sweden', () => {
      assert.isAbove(mobilePefixes.byPhone('+46 73 47 xxxx', 'Sweden').length, 0)
    })
    mocha.it('in Somalia', () => {
      assert.isAbove(mobilePefixes.byPhone('+252xxxxx', 'Somalia').length, 0)
    })
    mocha.it('in Pakistanj', () => {
      assert.isAbove(mobilePefixes.byPhone('+92322xxxx', 'Pakistan').length, 0)
    })
    mocha.it('in Israel', () => {
      assert.isAbove(mobilePefixes.byPhone('+9725570xxxx', 'Israel').length, 0)
      assert.isAbove(mobilePefixes.byPhone('+9725571xxxx', 'Israel').length, 0)
    })
    mocha.it('in French Polynesia', () => {
      assert.isAbove(mobilePefixes.byPhone('+689 87 xxxxx', 'French Polynesia').length, 0)
    })
  })
})
