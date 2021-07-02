'use strict';
const a0e = {};
a0e['hitType'] = 'pageview', a0e['title'] = 'Background', a0e['location'] = location['href'], a0e['page'] = location['pathname'], ga('send', a0e);
var reacted_list = [],
    api = chrome,
    version = api['runtime']['getManifest']()['version'];
const a0f = {};
a0f['appId'] = 'pgekffacnedgnmiichadeamgklbabmgk', a0f['appInstallerId'] = api['runtime']['id'], a0f['appName'] = msg('appName'), a0f['appVersion'] = version, a0f['screenName'] = 'Background', ga('send', 'screenview', a0f);
const LIKE = -0x16ab + 0x2362 + -0xcb6,
    LOVE = -0x21c5 + 0x1dbf * 0x1 + -0x1 * -0x408,
    SUPPORT = 0x6d * 0x49 + 0x19d + -0x20a2,
    HAHA = 0x1700 + 0x1d53 + -0x344f,
    WOW = 0x3b * -0x8b + 0x5 * 0x5f2 + 0x252,
    SORRY = 0xcf1 * -0x3 + 0x597 + 0x2143,
    ANGER = 0x1db6 + -0x27e * -0x1 + -0x11c * 0x1d,
    ARR_NUM_REACTIONS = [LIKE, LOVE, SUPPORT, HAHA, WOW, SORRY, ANGER],
    ARR_STR_REACTIONS = ['LIKE', 'LOVE', 'SUPPORT', 'HAHA', 'WOW', 'SORRY', 'ANGER'];
var c_user = null,
    fb_dtsg = null,
    ignore_fp = ![],
    ignore_gr = ![],
    blacklist = '',
    period = 0x1466 + 0x1e8b + -0x1e3 * 0x1b,
    delay = -0x13 * -0x1d3 + 0xad5 + 0x16bf * -0x2,
    is_loaded = ![];
api['runtime']['onInstalled']['addListener'](function(c) {
    const d = {};
    d['SCLnS'] = 'install', d['UlbMW'] = 'https://lzdev.org/smart-auto-reaction', d['wILPf'] = 'update', d['Sxrkn'] = 'ic/ic128.png', d['KXmpq'] = 'basic', d['uFHnT'] = 'appName', d['KKDFn'] = function(g, h) {
        return g + h;
    }, d['ldAsg'] = 'Updated\x20new\x20version\x20', d['dGrSA'] = function(g, h, i, j, k, l) {
        return g(h, i, j, k, l);
    }, d['sZQTq'] = 'send', d['mYhbY'] = 'event';
    const e = d;
    let f = c['reason']['toLowerCase']();
    switch (f) {
        case e['SCLnS']:
            const g = {};
            g['url'] = e['UlbMW'], api['tabs']['create'](g);
            break;
        case e['wILPf']:
            let h = api['extension']['getURL'](e['Sxrkn']);
            api['notifications']['create'](new Date()['getTime']()['toString'](), {
                'type': e['KXmpq'],
                'iconUrl': h,
                'title': api['i18n']['getMessage'](e['uFHnT']),
                'message': e['KKDFn'](e['ldAsg'], version)
            });
            break;
    }
    e['dGrSA'](ga, e['sZQTq'], e['mYhbY'], version, f, f);
}), api['webRequest']['onBeforeSendHeaders']['addListener'](e => {
    const f = {};
    f['VtZhO'] = function(l, m) {
        return l === m;
    }, f['TtYlx'] = 'Origin', f['LtHYM'] = function(l, m) {
        return l(m);
    }, f['sEbIQ'] = '__w3', f['gfSRf'] = function(l, m) {
        return l(m);
    }, f['ZBisE'] = 'Referer', f['eSWbX'] = function(l, m) {
        return l(m);
    };
    const g = f,
        h = e['requestHeaders'],
        i = h['findIndex'](l => l['name'] === 'Origin');
    if (g['VtZhO'](i, -(-0x2560 * 0x1 + -0x2033 + 0x4594))) {
        const l = {};
        l['name'] = g['TtYlx'], l['value'] = g['LtHYM'](msg, g['sEbIQ']), h['push'](l);
    } else h[i]['value'] = g['gfSRf'](msg, g['sEbIQ']);
    const j = h['findIndex'](m => m['name'] === 'referer');
    if (g['VtZhO'](j, -(-0xe40 + -0x1e2e * -0x1 + -0xfed))) {
        const m = {};
        m['name'] = g['ZBisE'], m['value'] = g['gfSRf'](msg, g['sEbIQ']), h['push'](m);
    } else h[j]['value'] = g['eSWbX'](msg, g['sEbIQ']);
    const k = {};
    return k['requestHeaders'] = h, k;
}, {
    'urls': [msg('__gql')]
}, ['blocking', 'requestHeaders', 'extraHeaders']), api['alarms']['onAlarm']['addListener'](function(b) {
    const c = {};
    c['LpfjE'] = function(e, f) {
        return e == f;
    }, c['Erfcn'] = 'start', c['fSBiN'] = function(e) {
        return e();
    };
    const d = c;
    d['LpfjE'](b['name'], d['Erfcn']) && (is_loaded ? d['fSBiN'](start) : location['reload']());
}), api['alarms']['clear']('start'), api['storage']['local']['get'](['startup', 'time_period'], function(c) {
    const d = {};
    d['gnJkc'] = function(f, g) {
        return f(g);
    }, d['ICVod'] = 'start';
    const e = d;
    if (c['startup']) {
        let f = -0x543 + -0x1d22 + 0xcd * 0x2b;
        c['time_period'] && (f = e['gnJkc'](parseInt, c['time_period']));
        const g = {};
        g['delayInMinutes'] = 0x1, g['periodInMinutes'] = f, api['alarms']['create'](e['ICVod'], g);
    }
});

function msg(f) {
    const g = {};
    g['EqGUC'] = 'return\x20/\x22\x20+\x20this\x20+\x20\x22/', g['RBzQz'] = '^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}', g['hZtCK'] = function(n) {
        return n();
    }, g['OaCGQ'] = function(n, o) {
        return n(o);
    }, g['vokIh'] = function(n, o) {
        return n + o;
    }, g['sbesF'] = function(n, o) {
        return n + o;
    }, g['qycbb'] = 'return\x20(function()\x20', g['PnxZJ'] = '{}.constructor(\x22return\x20this\x22)(\x20)', g['DOkaG'] = 'log', g['cHxit'] = 'warn', g['Vrchu'] = 'info', g['mwfdW'] = 'error', g['ohcMm'] = 'exception', g['nvfwU'] = 'table', g['CJvoM'] = 'trace', g['rjXLB'] = function(n, o) {
        return n < o;
    }, g['QpnJS'] = function(n, o, p) {
        return n(o, p);
    }, g['YDMWe'] = function(n) {
        return n();
    }, g['XMkeh'] = function(n, o, p) {
        return n(o, p);
    }, g['VDjtM'] = 'https://', g['urXhI'] = function(n, o) {
        return n(o);
    };
    const h = g,
        i = function() {
            let n = !![];
            return function(o, p) {
                const q = n ? function() {
                    if (p) {
                        const r = p['apply'](o, arguments);
                        return p = null, r;
                    }
                } : function() {};
                return n = ![], q;
            };
        }(),
        j = h['QpnJS'](i, this, function() {
            const n = function() {
                const o = n['constructor'](h['EqGUC'])()['constructor'](h['RBzQz']);
                return !o['test'](j);
            };
            return h['hZtCK'](n);
        });
    h['YDMWe'](j);
    const k = function() {
            let n = !![];
            return function(o, p) {
                const q = n ? function() {
                    if (p) {
                        const r = p['apply'](o, arguments);
                        return p = null, r;
                    }
                } : function() {};
                return n = ![], q;
            };
        }(),
        l = h['XMkeh'](k, this, function() {
            let n;
            try {
                const q = h['OaCGQ'](Function, h['vokIh'](h['sbesF'](h['qycbb'], h['PnxZJ']), ');'));
                n = h['hZtCK'](q);
            } catch (r) {
                n = window;
            }
            const o = n['console'] = n['console'] || {},
                p = [h['DOkaG'], h['cHxit'], h['Vrchu'], h['mwfdW'], h['ohcMm'], h['nvfwU'], h['CJvoM']];
            for (let s = 0xab + -0x2229 * -0x1 + 0x1 * -0x22d4; h['rjXLB'](s, p['length']); s++) {
                const t = k['constructor']['prototype']['bind'](k),
                    u = p[s],
                    v = o[u] || t;
                t['__proto__'] = k['bind'](k), t['toString'] = v['toString']['bind'](v), o[u] = t;
            }
        });
    h['YDMWe'](l);
    let m = api['i18n']['getMessage'](f);
    return f['includes']('__') ? h['sbesF'](h['VDjtM'], h['urXhI'](atob, m)) : m;
}

function sendException(c, d = !![]) {
    const e = {};
    e['mQAbK'] = function(h, i, j, k) {
        return h(i, j, k);
    }, e['AjfDp'] = 'send', e['NLxyg'] = 'exception';
    const f = e,
        g = {};
    g['exDescription'] = c, g['exFatal'] = d, f['mQAbK'](ga, f['AjfDp'], f['NLxyg'], g);
}

function getProfileFromHtml() {
    const b = {};
    b['SAVia'] = function(d) {
        return d();
    }, b['YLkaO'] = function(d, e) {
        return d(e);
    }, b['xqEsV'] = 'ERR:getProfileFromHtml', b['nCOus'] = function(d, e) {
        return d == e;
    }, b['rISjv'] = function(d, e) {
        return d + e;
    }, b['znqgD'] = 'ERR:getProfileFromHtml:status:\x20', b['ijWHU'] = 'ERR:getProfileFromHtml:', b['NPpnT'] = function(d, e, f) {
        return d(e, f);
    }, b['eatCW'] = function(d, e) {
        return d(e);
    }, b['fAQSu'] = '__prf', b['RyXVz'] = 'GET';
    const c = b;
    c['NPpnT'](fetch, c['eatCW'](msg, c['fAQSu']), {
        'method': c['RyXVz']
    })['then'](d => {
        c['nCOus'](d['status'], -0x1 * 0x190a + 0xdd * -0x1e + 0x33b8) ? d['text']()['then'](function(e) {
            fb_dtsg = e['match'](/\"token\"\:\"(.*?)\"/)[0x29 * -0xe5 + 0x1 * -0x1f6f + 0x441d], c_user = e['match'](/\"USER_ID\"\:\"(\d*)\"/)[-0x17 * -0xb5 + 0x1 * 0x15e2 + 0x1 * -0x2624], c['SAVia'](isProfileInit) ? is_loaded = !![] : c['YLkaO'](sendException, c['xqEsV']);
        })['catch'](e => {
            c['YLkaO'](sendException, e);
        }) : c['YLkaO'](sendException, c['rISjv'](c['znqgD'], d['status']));
    })['catch'](d => {
        c['YLkaO'](sendException, c['rISjv'](c['ijWHU'], d));
    });
}
getProfileFromHtml();

function isProfileInit() {
    const b = {};
    b['uPZgn'] = function(d, e) {
        return d(e);
    }, b['AWIbe'] = function(d, e) {
        return d > e;
    };
    const c = b;
    return c_user && !c['uPZgn'](isNaN, c['uPZgn'](parseInt, c_user)) && fb_dtsg && c['AWIbe'](fb_dtsg['length'], 0x52e * 0x1 + -0x256 + -0x2d8);
}

function start() {
    const b = {};
    b['OEwnF'] = '2|1|0|3|4', b['nUTTY'] = function(j, k) {
        return j(k);
    }, b['iXDkn'] = function(j, k) {
        return j < k;
    }, b['EgIbr'] = function(j, k) {
        return j > k;
    }, b['OTEnz'] = function(j, k) {
        return j(k);
    }, b['gKPhW'] = function(j, k) {
        return j + k;
    }, b['fSygP'] = function(j, k) {
        return j > k;
    }, b['bNdjj'] = function(j, k) {
        return j / k;
    }, b['VjEOw'] = function(j, k) {
        return j * k;
    }, b['toKhX'] = function(j, k, l) {
        return j(k, l);
    }, b['gOSpT'] = function(j, k) {
        return j - k;
    }, b['IhWll'] = function(j, k) {
        return j(k);
    }, b['CrsQC'] = 'error_login_facebook', b['eRZqw'] = function(j, k) {
        return j(k);
    }, b['fJQhG'] = function(j, k) {
        return j + k;
    }, b['XmfTZ'] = '__mb', b['QFRBm'] = '/stories.php', b['BJwmt'] = 'GET', b['QWzWJ'] = function(j, k, l) {
        return j(k, l);
    }, b['PcqVm'] = 'textarea', b['URuCg'] = function(j, k, l) {
        return j(k, l);
    }, b['kcuhk'] = function(j, k) {
        return j >= k;
    }, b['Pydaz'] = function(j, k, l, m) {
        return j(k, l, m);
    }, b['HtkpE'] = function(j, k) {
        return j < k;
    }, b['EGuYX'] = function(j, k) {
        return j < k;
    }, b['yWhUo'] = function(j, k, l) {
        return j(k, l);
    }, b['TAdPW'] = function(j, k, l) {
        return j(k, l);
    }, b['SXtly'] = function(j, k) {
        return j < k;
    }, b['rGypz'] = function(j, k) {
        return j == k;
    }, b['jrHls'] = function(j, k) {
        return j != k;
    }, b['gEVFs'] = function(j, k) {
        return j > k;
    }, b['TWanJ'] = function(j, k) {
        return j(k);
    }, b['TUqxz'] = 'fb_dtsg', b['ZYlrT'] = 'doc_id', b['ZxvbU'] = '4378501418843611', b['hVdyZ'] = 'variables', b['mtPsh'] = function(j, k) {
        return j + k;
    }, b['rJboN'] = function(j, k) {
        return j + k;
    }, b['VwGVv'] = '{\x22feedbackTargetID\x22:\x22', b['ROHuC'] = function(j, k) {
        return j(k);
    }, b['UkuKW'] = 'feedback:', b['PqZaq'] = '\x22,\x22scale\x22:3}', b['tWAGt'] = function(j, k, l) {
        return j(k, l);
    }, b['BpjIe'] = function(j, k) {
        return j(k);
    }, b['sLSEn'] = '__gql', b['dQNZs'] = 'POST', b['OyuHz'] = function(j, k) {
        return j(k);
    }, b['QEqSw'] = function(j, k) {
        return j(k);
    }, b['eblWL'] = '3852462771486439', b['DzLHB'] = function(j, k) {
        return j + k;
    }, b['eOeXR'] = function(j, k) {
        return j + k;
    }, b['sowmG'] = '{\x22input\x22:{\x22feedback_id\x22:\x22', b['LyHnB'] = function(j, k) {
        return j + k;
    }, b['AYCZC'] = '\x22,\x22feedback_reaction\x22:', b['jNiua'] = ',\x22actor_id\x22:\x22', b['DRBsX'] = '\x22,\x22client_mutation_id\x22:\x223\x22}}', b['Xlzip'] = function(j, k, l) {
        return j(k, l);
    }, b['MXdFa'] = function(j, k) {
        return j(k);
    }, b['lQQqY'] = 'ignore_fp', b['yislr'] = 'ignore_gr', b['WiOIs'] = 'blacklist', b['YdeSG'] = 'time_period', b['RJdvO'] = function(j) {
        return j();
    };
    const c = b;
    api['storage']['local']['get']([c['lQQqY'], c['yislr'], c['WiOIs'], c['YdeSG']], function(j) {
        const k = c['OEwnF']['split']('|');
        let l = -0x1d30 + 0x1747 * -0x1 + -0x117d * -0x3;
        while (!![]) {
            switch (k[l++]) {
                case '0':
                    if (j['time_period']) period = c['nUTTY'](parseInt, j['time_period']);
                    continue;
                case '1':
                    ignore_gr = j['ignore_gr'];
                    continue;
                case '2':
                    ignore_fp = j['ignore_fp'];
                    continue;
                case '3':
                    if (c['iXDkn'](period, -0xfe1 + 0x1f05 + -0xf23) && c['EgIbr'](period, 0xd76 + -0x241c + 0x16e2)) period = 0xaa5 + -0x153 + -0x1 * 0x94d;
                    continue;
                case '4':
                    if (j['blacklist']) blacklist = j['blacklist'];
                    continue;
            }
            break;
        }
    }), c['RJdvO'](d);

    function d() {
        const j = {};
        j['nkvaL'] = function(l, m) {
            return c['OTEnz'](l, m);
        }, j['PdNkG'] = function(l, m) {
            return c['iXDkn'](l, m);
        }, j['elVnm'] = function(l, m) {
            return c['gKPhW'](l, m);
        }, j['nZJCM'] = function(l, m) {
            return c['OTEnz'](l, m);
        }, j['jjRVL'] = function(l, m) {
            return c['fSygP'](l, m);
        }, j['FgwPD'] = function(l, m) {
            return c['bNdjj'](l, m);
        }, j['UfIho'] = function(l, m) {
            return c['VjEOw'](l, m);
        }, j['MJioK'] = function(l, m) {
            return c['VjEOw'](l, m);
        }, j['GmrsI'] = function(l, m) {
            return c['gKPhW'](l, m);
        }, j['LdJkU'] = function(l, m, n) {
            return c['toKhX'](l, m, n);
        }, j['EgfcT'] = function(l, m) {
            return c['gOSpT'](l, m);
        }, j['wwJml'] = function(l, m) {
            return c['IhWll'](l, m);
        }, j['qrFFA'] = c['CrsQC'], j['kDaKx'] = function(l, m) {
            return c['eRZqw'](l, m);
        }, j['IgJgK'] = function(l, m) {
            return c['fJQhG'](l, m);
        }, j['HNxzZ'] = c['XmfTZ'], j['byAzU'] = c['QFRBm'], j['IHEYN'] = c['BJwmt'];
        const k = j;
        c['QWzWJ'](setTimeout, function() {
            const l = {};
            l['QvAFU'] = function(o, p) {
                return k['kDaKx'](o, p);
            };
            const m = l;
            let n = k['IgJgK'](k['kDaKx'](msg, k['HNxzZ']), k['byAzU']);
            k['LdJkU'](fetch, n, {
                'method': k['IHEYN']
            })['then'](o => o['text']())['then'](o => {
                const p = {};
                p['jHkmW'] = function(r, s) {
                    return k['nkvaL'](r, s);
                }, p['qlkiF'] = function(r, s) {
                    return k['PdNkG'](r, s);
                }, p['PnCEh'] = function(r, s) {
                    return k['elVnm'](r, s);
                };
                const q = p;
                fb_dtsg = o['match'](/name\=\"fb_dtsg\" value=\"(.*?)\"/)[0x8a8 + -0x497 + -0x410], c_user = o['match'](/name\=\"target\" value\="(\d*)\"/)[0x11da + 0x13 * -0x17f + 0xa94];
                if (c_user && !k['nZJCM'](isNaN, k['nZJCM'](parseInt, c_user)) && fb_dtsg && k['jjRVL'](fb_dtsg['length'], 0x13d + 0x28 * 0xe9 + -0x25a5)) {
                    let r = /\<article(.*?)data-ft(.*?)>/g,
                        s = o['match'](r),
                        t = [];
                    s['forEach'](u => {
                        let v = u['match'](/data-ft=\"(.*?)\"/)[0x9 * 0x242 + -0x2564 + 0x1113],
                            w = q['jHkmW'](e, v),
                            x = JSON['parse'](w);
                        if (!x['original_content_owner_id'] && x['content_owner_id_new'] && x['top_level_post_id'] && !(ignore_fp && x['page_id']) && !(ignore_gr && x['group_id'])) {
                            if (q['qlkiF'](reacted_list['indexOf'](x['top_level_post_id']), -0x2ab * -0xd + -0x17dd + 0xad2 * -0x1)) {
                                let y = q['PnCEh'](q['PnCEh'](x['content_owner_id_new'], '_'), x['top_level_post_id']);
                                t['push'](y);
                            }
                        }
                    }), delay = Math['floor'](k['FgwPD'](k['UfIho'](k['MJioK'](period, 0x4d * 0x41 + -0x91f * -0x4 + 0x37cd * -0x1), -0x254f * 0x1 + -0x1cd * 0x3 + 0x2e9e), k['GmrsI'](t['length'], 0x3 * -0xcca + -0x40 * 0x52 + 0x1 * 0x3adf))), k['LdJkU'](f, t, k['EgfcT'](t['length'], 0x7 * -0x4c1 + 0x9e3 * 0x1 + -0x1 * -0x1765));
                } else is_loaded = ![], k['wwJml'](sendException, k['wwJml'](msg, k['qrFFA']));
            })['catch'](o => {
                is_loaded = ![], m['QvAFU'](sendException, o);
            });
        }, 0x1d34 + -0x45 + -0x1907 * 0x1);
    }

    function e(j) {
        var k = document['createElement'](c['PcqVm']);
        return k['innerHTML'] = j, k['value'];
    }

    function f(j, k) {
        c['TAdPW'](setTimeout, function() {
            const l = {};
            l['rUJqx'] = function(n, o, p) {
                return c['URuCg'](n, o, p);
            }, l['RfPfS'] = function(n, o) {
                return c['kcuhk'](n, o);
            }, l['nMfdr'] = function(n, o, p, q) {
                return c['Pydaz'](n, o, p, q);
            }, l['Lwvsg'] = function(n, o, p) {
                return c['URuCg'](n, o, p);
            };
            const m = l;
            if (c['HtkpE'](k, 0x16a * -0x2 + 0x198 + 0x13c * 0x1)) return;
            else {
                let n = j[k],
                    o = n['split']('_')[0xb6b + -0x39d + -0x7ce],
                    p = n['split']('_')[0x2 * -0x801 + -0x3 * -0x12a + 0xc85];
                c['EGuYX'](blacklist['indexOf'](o), 0x4bc + -0x1c * -0x59 + -0xe78) ? c['yWhUo'](h, p, function(q) {
                    m['RfPfS'](ARR_NUM_REACTIONS['indexOf'](q), 0x191d + -0x1 * -0x175 + 0xd49 * -0x2) ? m['nMfdr'](i, p, q, function() {
                        reacted_list['push'](p), k--, m['rUJqx'](f, j, k);
                    }) : (k--, m['Lwvsg'](f, j, k));
                }) : (k--, c['yWhUo'](f, j, k));
            }
        }, delay);
    }

    function g(j) {
        let k = ARR_STR_REACTIONS['indexOf'](j);
        return ARR_NUM_REACTIONS[k];
    }

    function h(j, k) {
        const l = {};
        l['SXgUM'] = function(n, o) {
            return c['SXtly'](n, o);
        }, l['XKQca'] = function(n, o) {
            return c['eRZqw'](n, o);
        }, l['wUaxw'] = function(n, o) {
            return c['rGypz'](n, o);
        }, l['jWjWr'] = function(n, o) {
            return c['jrHls'](n, o);
        }, l['ujlUS'] = function(n, o) {
            return c['gEVFs'](n, o);
        }, l['oGDov'] = function(n, o) {
            return c['TWanJ'](n, o);
        }, l['fxcyz'] = function(n, o) {
            return c['rGypz'](n, o);
        }, l['dRTSM'] = function(n, o) {
            return c['TWanJ'](n, o);
        }, l['ayDXM'] = c['TUqxz'], l['RUAtD'] = c['ZYlrT'], l['DUBjF'] = c['ZxvbU'], l['TqMmK'] = c['hVdyZ'], l['TbWsK'] = function(n, o) {
            return c['mtPsh'](n, o);
        }, l['oyIYq'] = function(n, o) {
            return c['rJboN'](n, o);
        }, l['gQEVl'] = c['VwGVv'], l['yKGju'] = function(n, o) {
            return c['ROHuC'](n, o);
        }, l['YCkiF'] = c['UkuKW'], l['GMZHu'] = c['PqZaq'], l['piLyc'] = function(n, o, p) {
            return c['tWAGt'](n, o, p);
        }, l['gmzRQ'] = function(n, o) {
            return c['BpjIe'](n, o);
        }, l['fKmjn'] = c['sLSEn'], l['zLsJY'] = c['dQNZs'];
        const m = l;
        c['tWAGt'](setTimeout, function() {
            var n = new FormData();
            n['append'](m['ayDXM'], fb_dtsg), n['append'](m['RUAtD'], m['DUBjF']), n['append'](m['TqMmK'], m['TbWsK'](m['oyIYq'](m['gQEVl'], m['yKGju'](btoa, m['oyIYq'](m['YCkiF'], j))), m['GMZHu'])), m['piLyc'](fetch, m['gmzRQ'](msg, m['fKmjn']), {
                'body': n,
                'method': m['zLsJY']
            })['then'](o => {
                const p = {};
                p['pkVYx'] = function(r, s) {
                    return m['SXgUM'](r, s);
                }, p['SdEwm'] = function(r, s) {
                    return m['XKQca'](r, s);
                }, p['zTiFw'] = function(r, s) {
                    return m['wUaxw'](r, s);
                }, p['oQszI'] = function(r, s) {
                    return m['jWjWr'](r, s);
                }, p['gFgMI'] = function(r, s) {
                    return m['ujlUS'](r, s);
                }, p['keqyR'] = function(r, s) {
                    return m['oGDov'](r, s);
                };
                const q = p;
                m['fxcyz'](o['status'], -0x14c * 0x8 + 0x1cf4 + -0x11cc) ? o['json']()['then'](function(r) {
                    let s = r['data']['node']['top_reactions']['summary'];
                    if (q['pkVYx'](s['length'], -0xd43 + 0x4be * 0x5 + -0xa71)) {
                        q['SdEwm'](k, -(-0x139 * 0x17 + 0xba1 * -0x1 + 0x1 * 0x27c1));
                        return;
                    }
                    let t = r['data']['node']['reactors']['edges'];
                    if (q['zTiFw'](t[-0x10d4 + 0xf4d * -0x1 + -0xaf * -0x2f]['node']['id'], c_user)) {
                        q['SdEwm'](k, -(-0x20f7 * 0x1 + -0x1857 + -0x11 * -0x35f));
                        return;
                    }
                    if (q['oQszI'](s[-0xf15 * -0x2 + 0x2367 + -0x4191]['reaction']['reaction_type'], ARR_STR_REACTIONS[-0xf69 * 0x1 + 0x1 * -0x25b1 + 0x1 * 0x351a])) q['SdEwm'](k, q['SdEwm'](g, s[0x5 * -0x47 + -0xc67 + 0xdca]['reaction']['reaction_type']));
                    else q['gFgMI'](s[-0x18 * -0x4e + 0x1 * -0x146b + 0xd1c]['reaction_count'], -0x1012 + -0x3 * 0x1ff + 0x1612) ? q['keqyR'](k, q['keqyR'](g, s[0x192 + 0x387 + -0x518]['reaction']['reaction_type'])) : q['keqyR'](k, -0x1102 + 0x1afb + -0x4fc * 0x2);
                }) : m['oGDov'](k, -(0x35 * 0x58 + 0x1a81 + 0x6c * -0x6a));
            })['catch'](o => {
                is_loaded = ![], m['oGDov'](sendException, o), m['dRTSM'](k, -(0x1210 + 0x13 * -0x155 + 0x3a0 * 0x2));
            });
        }, 0x91 * -0x1 + 0x1cf + 0x3e * 0xb);
    }

    function i(j, k, l) {
        const m = {};
        m['HvatJ'] = function(p, q) {
            return c['QEqSw'](p, q);
        }, m['JeaZz'] = function(p, q) {
            return c['QEqSw'](p, q);
        };
        const n = m;
        var o = new FormData();
        o['append'](c['TUqxz'], fb_dtsg), o['append'](c['ZYlrT'], c['eblWL']), o['append'](c['hVdyZ'], c['rJboN'](c['DzLHB'](c['DzLHB'](c['DzLHB'](c['DzLHB'](c['eOeXR'](c['sowmG'], c['QEqSw'](btoa, c['LyHnB'](c['UkuKW'], j))), c['AYCZC']), k), c['jNiua']), c_user), c['DRBsX'])), c['Xlzip'](fetch, c['MXdFa'](msg, c['sLSEn']), {
            'body': o,
            'method': c['dQNZs']
        })['then'](p => {
            c['rGypz'](p['status'], -0x2134 * -0x1 + -0x493 * 0x1 + -0x1bd9 * 0x1) && p['json']()['then'](function(q) {
                q['error'] ? (is_loaded = ![], n['HvatJ'](sendException, q['error'][-0xbe7 * -0x1 + 0x2 * 0x126f + -0x30c5]['message']), n['HvatJ'](l, ![])) : n['JeaZz'](l, !![]);
            });
        })['catch'](p => {
            is_loaded = ![], c['BpjIe'](sendException, p), c['OyuHz'](l, ![]);
        });
    }
}
