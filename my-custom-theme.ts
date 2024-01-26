
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
    name: 'my-custom-theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `system-ui`,
		"--theme-font-family-heading": `system-ui`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "9999px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "0px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "0 0 0",
		"--on-secondary": "255 255 255",
		"--on-tertiary": "255 255 255",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "0 0 0",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #7298cc 
		"--color-primary-50": "234 240 247", // #eaf0f7
		"--color-primary-100": "227 234 245", // #e3eaf5
		"--color-primary-200": "220 229 242", // #dce5f2
		"--color-primary-300": "199 214 235", // #c7d6eb
		"--color-primary-400": "156 183 219", // #9cb7db
		"--color-primary-500": "114 152 204", // #7298cc
		"--color-primary-600": "103 137 184", // #6789b8
		"--color-primary-700": "86 114 153", // #567299
		"--color-primary-800": "68 91 122", // #445b7a
		"--color-primary-900": "56 74 100", // #384a64
		// secondary | #2a7815 
		"--color-secondary-50": "223 235 220", // #dfebdc
		"--color-secondary-100": "212 228 208", // #d4e4d0
		"--color-secondary-200": "202 221 197", // #caddc5
		"--color-secondary-300": "170 201 161", // #aac9a1
		"--color-secondary-400": "106 161 91", // #6aa15b
		"--color-secondary-500": "42 120 21", // #2a7815
		"--color-secondary-600": "38 108 19", // #266c13
		"--color-secondary-700": "32 90 16", // #205a10
		"--color-secondary-800": "25 72 13", // #19480d
		"--color-secondary-900": "21 59 10", // #153b0a
		// tertiary | #2d6216 
		"--color-tertiary-50": "224 231 220", // #e0e7dc
		"--color-tertiary-100": "213 224 208", // #d5e0d0
		"--color-tertiary-200": "203 216 197", // #cbd8c5
		"--color-tertiary-300": "171 192 162", // #abc0a2
		"--color-tertiary-400": "108 145 92", // #6c915c
		"--color-tertiary-500": "45 98 22", // #2d6216
		"--color-tertiary-600": "41 88 20", // #295814
		"--color-tertiary-700": "34 74 17", // #224a11
		"--color-tertiary-800": "27 59 13", // #1b3b0d
		"--color-tertiary-900": "22 48 11", // #16300b
		// success | #dbaf2e 
		"--color-success-50": "250 243 224", // #faf3e0
		"--color-success-100": "248 239 213", // #f8efd5
		"--color-success-200": "246 235 203", // #f6ebcb
		"--color-success-300": "241 223 171", // #f1dfab
		"--color-success-400": "230 199 109", // #e6c76d
		"--color-success-500": "219 175 46", // #dbaf2e
		"--color-success-600": "197 158 41", // #c59e29
		"--color-success-700": "164 131 35", // #a48323
		"--color-success-800": "131 105 28", // #83691c
		"--color-success-900": "107 86 23", // #6b5617
		// warning | #f053e9 
		"--color-warning-50": "253 229 252", // #fde5fc
		"--color-warning-100": "252 221 251", // #fcddfb
		"--color-warning-200": "251 212 250", // #fbd4fa
		"--color-warning-300": "249 186 246", // #f9baf6
		"--color-warning-400": "245 135 240", // #f587f0
		"--color-warning-500": "240 83 233", // #f053e9
		"--color-warning-600": "216 75 210", // #d84bd2
		"--color-warning-700": "180 62 175", // #b43eaf
		"--color-warning-800": "144 50 140", // #90328c
		"--color-warning-900": "118 41 114", // #762972
		// error | #b88f36 
		"--color-error-50": "244 238 225", // #f4eee1
		"--color-error-100": "241 233 215", // #f1e9d7
		"--color-error-200": "237 227 205", // #ede3cd
		"--color-error-300": "227 210 175", // #e3d2af
		"--color-error-400": "205 177 114", // #cdb172
		"--color-error-500": "184 143 54", // #b88f36
		"--color-error-600": "166 129 49", // #a68131
		"--color-error-700": "138 107 41", // #8a6b29
		"--color-error-800": "110 86 32", // #6e5620
		"--color-error-900": "90 70 26", // #5a461a
		// surface | #d1d1d1 
		"--color-surface-50": "248 248 248", // #f8f8f8
		"--color-surface-100": "246 246 246", // #f6f6f6
		"--color-surface-200": "244 244 244", // #f4f4f4
		"--color-surface-300": "237 237 237", // #ededed
		"--color-surface-400": "223 223 223", // #dfdfdf
		"--color-surface-500": "209 209 209", // #d1d1d1
		"--color-surface-600": "188 188 188", // #bcbcbc
		"--color-surface-700": "157 157 157", // #9d9d9d
		"--color-surface-800": "125 125 125", // #7d7d7d
		"--color-surface-900": "102 102 102", // #666666
		
	}
}