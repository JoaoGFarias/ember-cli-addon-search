import { test } from 'qunit';
import moduleForAcceptance from '../helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | home');

test('visiting home page', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
    assert.ok($('.table-packages .package-link').is( ":visible" ), "the addon is visible");
  });
});

test('checking search field placeholder', function(assert) {
  visit('/');
  andThen(function() {
    assert.equal($('.search-field').attr('placeholder'), 'Search 3943 addons');
  });
});


test('visiting query page directly', function(assert) {
  visit('/?query=awesome-macros');

  andThen(function() {
    assert.equal(currentURL(), '/?query=awesome-macros');
    var addon = $('.table-packages .package-link');
    assert.equal(addon.first().text(), 'ember-awesome-macros');
    assert.equal(addon.length, 1);
  });
});
