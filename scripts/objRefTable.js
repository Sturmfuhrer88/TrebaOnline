const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Touch,
		C3.Plugins.Mouse,
		C3.Plugins.Sprite,
		C3.Plugins.Text,
		C3.Plugins.TextBox,
		C3.Plugins.InstantGamesBridge,
		C3.Plugins.System.Cnds.IsGroupActive,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.Sprite.Exps.Height,
		C3.Plugins.Text.Acts.SetVisible,
		C3.Plugins.InstantGamesBridge.Acts.Initialize,
		C3.Plugins.System.Acts.WaitForPreviousActions,
		C3.Plugins.InstantGamesBridge.Acts.ShowBanner,
		C3.Plugins.System.Cnds.ForEach,
		C3.Plugins.Sprite.Acts.AddChild,
		C3.Plugins.Touch.Exps.Y,
		C3.Plugins.Touch.Cnds.OnTouchStart,
		C3.Plugins.Touch.Cnds.IsInTouch,
		C3.Plugins.System.Cnds.Else,
		C3.Plugins.System.Exps.max,
		C3.Plugins.System.Exps.viewportbottom,
		C3.Plugins.System.Exps.dt,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.Sprite.Acts.SetY,
		C3.Plugins.Mouse.Cnds.OnWheel,
		C3.Plugins.Touch.Cnds.OnTapGestureObject,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.System.Cnds.Compare,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.InstantGamesBridge.Acts.ShowRewarded,
		C3.Plugins.InstantGamesBridge.Cnds.OnRewardedClosed,
		C3.Plugins.System.Acts.Wait
	];
};
self.C3_JsPropNameTable = [
	{Touch: 0},
	{Mouse: 0},
	{scroll: 0},
	{T1: 0},
	{T2: 0},
	{T3: 0},
	{T4: 0},
	{T5: 0},
	{T6: 0},
	{T7: 0},
	{T8: 0},
	{T9: 0},
	{T10: 0},
	{T11: 0},
	{T12: 0},
	{trebafinish: 0},
	{zdr: 0},
	{upokoi: 0},
	{TextInput: 0},
	{sendtreba: 0},
	{u1: 0},
	{u2: 0},
	{u3: 0},
	{u4: 0},
	{u5: 0},
	{u6: 0},
	{u7: 0},
	{u8: 0},
	{u9: 0},
	{u10: 0},
	{u11: 0},
	{InstantGamesBridge: 0},
	{success: 0},
	{VMenu: 0},
	{Family1: 0},
	{T: 0},
	{U: 0},
	{scrollPos: 0},
	{scrollTouchY: 0},
	{scrollMax: 0},
	{scrollSpeed: 0},
	{overEdgeResponce: 0},
	{sensibility: 0}
];

self.InstanceType = {
	Touch: class extends self.IInstance {},
	Mouse: class extends self.IInstance {},
	scroll: class extends self.ISpriteInstance {},
	T1: class extends self.ITextInstance {},
	T2: class extends self.ITextInstance {},
	T3: class extends self.ITextInstance {},
	T4: class extends self.ITextInstance {},
	T5: class extends self.ITextInstance {},
	T6: class extends self.ITextInstance {},
	T7: class extends self.ITextInstance {},
	T8: class extends self.ITextInstance {},
	T9: class extends self.ITextInstance {},
	T10: class extends self.ITextInstance {},
	T11: class extends self.ITextInstance {},
	T12: class extends self.ITextInstance {},
	trebafinish: class extends self.ITextInstance {},
	zdr: class extends self.ISpriteInstance {},
	upokoi: class extends self.ISpriteInstance {},
	TextInput: class extends self.ITextInputInstance {},
	sendtreba: class extends self.ITextInstance {},
	u1: class extends self.ITextInstance {},
	u2: class extends self.ITextInstance {},
	u3: class extends self.ITextInstance {},
	u4: class extends self.ITextInstance {},
	u5: class extends self.ITextInstance {},
	u6: class extends self.ITextInstance {},
	u7: class extends self.ITextInstance {},
	u8: class extends self.ITextInstance {},
	u9: class extends self.ITextInstance {},
	u10: class extends self.ITextInstance {},
	u11: class extends self.ITextInstance {},
	InstantGamesBridge: class extends self.IInstance {},
	success: class extends self.ITextInstance {},
	VMenu: class extends self.ITextInstance {},
	Family1: class extends self.ITextInstance {}
}